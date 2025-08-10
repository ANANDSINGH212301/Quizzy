"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ProfileAvatar from "./profile";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between h-[4.1rem] px-4 shadow-sm border-b border-gray-200 bg-white">
      {/* Left: Sidebar Trigger */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-gray-600 hover:text-[#432dd7] transition-colors text-2xl" />
        <h1 className="text-lg font-semibold" style={{ color: "#432dd7" }}>
          Dashboard
        </h1>
      </div>

      {/* Right: Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden border transition-all hover:ring-2"
            style={{
              borderColor: "#d6d3ff",
              boxShadow: "0 0 0 2px transparent", 
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(67,45,215,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 2px transparent")
            }
          >
            <ProfileAvatar />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-48 shadow-lg border border-gray-100"
        >
          <DropdownMenuLabel className="text-gray-700">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="hover:bg-[#f4f3ff] hover:text-[#432dd7]">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#f4f3ff] hover:text-[#432dd7]">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#f4f3ff] hover:text-[#432dd7]">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#f4f3ff] hover:text-[#432dd7]">
            Subscription
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-red-600 hover:bg-red-50">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default DashboardHeader;
