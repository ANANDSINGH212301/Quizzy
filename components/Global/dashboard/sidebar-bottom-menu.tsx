"use client";

import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/AuthContext";

const bottomLinks = [
  {
    label: "Settings",
    href: "/settings",
    icon: <IoSettingsOutline className="size-5" />,
  },
];

const DashboardSidebarBottomMenu = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout fails, redirect to login
      router.push('/login');
    }
  };

  return (
    <nav className="flex flex-col gap-3 p-4 mt-auto border-t border-gray-200 pt-4">
      {bottomLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "rounded-md transition-colors duration-200",
              isActive
                ? "bg-red-500 text-white shadow-sm"
                : "hover:bg-red-50 hover:text-red-600"
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 p-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "text-white hover:bg-red-600"
                  : "text-gray-700 hover:text-red-600"
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Button>
          </Link>
        );
      })}
      
      {/* Logout Button */}
      <Button
        variant="ghost"
        onClick={handleLogout}
        className="w-full justify-start gap-2 p-3 text-red-600 hover:bg-red-50 hover:text-red-700"
      >
        <IoLogOutOutline className="size-5" />
        <span>Logout</span>
      </Button>
    </nav>
  );
};

export default DashboardSidebarBottomMenu;
