"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { signInRequest, signUpRequest } from "@/requests/auth/authrequest"

type User = {
  id: number;
  username: string;
  email: string;
  // ...other fields
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to delete cookie (for logout)
const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing cookies
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load user from server on mount
  useEffect(() => {
    if (!mounted) return; // Don't run until component is mounted

    // Check if user is authenticated by calling our API
    fetch('/api/auth/me')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Not authenticated');
      })
      .then(profile => {
        setUser(profile);
        setToken('authenticated'); // We don't need the actual token client-side
        setLoading(false);
      })
      .catch((error) => {
        console.log('User not authenticated:', error.message);
        setUser(null);
        setToken(null);
        setLoading(false);
      });
  }, [mounted]);

  const login = async (identifier: string, password: string) => {
    setLoading(true);
    try {
      const res = await signInRequest(identifier, password);
      setToken('authenticated');
      setUser(res.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    console.log('AuthContext: Starting signup process...');
    setLoading(true);
    try {
      console.log('AuthContext: Calling signup API...');
      const res = await signUpRequest(username, email, password);
      console.log('AuthContext: Signup API successful, setting user state...');
      setToken('authenticated');
      setUser(res.user);
      setLoading(false);
      console.log('AuthContext: Signup process completed successfully');
    } catch (error) {
      console.error('AuthContext: Signup failed:', error);
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    console.log('AuthContext: Starting logout process...');
    
    setUser(null);
    setToken(null);
    deleteCookie("token");
    console.log('AuthContext: Client-side state cleared');
    
    // Also clear the server-side cookie
    try {
      console.log('AuthContext: Calling logout API...');
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      
      if (response.ok) {
        console.log('AuthContext: Server-side logout successful');
      } else {
        console.error('AuthContext: Server-side logout failed:', response.status);
      }
    } catch (error) {
      console.error('AuthContext: Error clearing server cookie:', error);
    }
    
    console.log('AuthContext: Logout process completed');
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <AuthContext.Provider value={{ user: null, loading: true, login, signup, logout, token: null }}>
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
