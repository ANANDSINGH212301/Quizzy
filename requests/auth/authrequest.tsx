// nextjs-frontend/src/app/lib/requests.ts

import axios from "axios";

export const signInRequest = async (identifier: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/login', {
      email: identifier,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Error signing in");
  }
};

export const signUpRequest = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/register', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Error signing up");
  }
};

export const getUserProfile = async (jwt: string) => {
  try {
    const response = await axios.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch {
    return null;
  }
};
