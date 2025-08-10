"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Settings, User, LayoutDashboard } from "lucide-react";
import Logo from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Account", href: "/account", icon: <User className="w-5 h-5" /> },
  { label: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
  { label: "Profile", href: "/profile", icon: <User className="w-5 h-5" /> },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-white border-r border-gray-200 flex flex-col px-3">
      {/* Logo */}
      <SidebarHeader className="py-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-semibold" style={{ color: "#432dd7" }}>
            Quizzy
          </span>
        </Link>
      </SidebarHeader>

      <Separator className="mb-4" />

      {/* Navigation */}
      <SidebarContent>
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium 
                  transition-all duration-300 ease-in-out
                  ${isActive
                    ? "bg-[#432dd7] text-white shadow-sm border-l-4 border-[#432dd7]"
                    : "text-gray-700 border-l-4 border-transparent hover:bg-[#f4f3ff] hover:text-[#432dd7]"
                  }
                `}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </SidebarContent>

      {/* Footer with logout */}
      <SidebarFooter className="mt-auto px-4 py-4 border-t border-gray-200">
        <Link
          href="/logout"
          className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
          <span>Logout</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
