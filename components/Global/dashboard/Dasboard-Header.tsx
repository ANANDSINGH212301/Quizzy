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

const DasboardHeader = () => {
  return (
    <div className="flex justify-between items-center min-h-14 shadow p-3.5 gap-4">
      {/* Sidebar Toggle - Larger Icon */}
      <div className="text-2xl"> {/* Adjust icon size */}
        <SidebarTrigger />
      </div>

      {/* Avatar with Fixed Size */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
              <ProfileAvatar />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DasboardHeader;
