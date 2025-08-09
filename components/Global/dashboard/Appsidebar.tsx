"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Settings, User, LayoutDashboard, LogOut, UserCog } from "lucide-react";
import Logo from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link from Next.js
import DashboardSidebarMenu from "./sidebar-Menu";
import DashboardSidebarBottomMenu from "./sidebar-bottom-menu";
import { Separator } from "@/components/ui/separator";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <UserCog className="size-4" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="size-4" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <User className="size-4" />,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="bg-white p-2 hover:shadow-lg transition-shadow duration-200">
      <SidebarHeader className="  bg-white">
        <Link href="/" className="flex items-center space-x-2 pl-4">
          <Logo />
          <span className="text-xl font-bold text-gray-800">Quizzy</span>
        </Link>

      </SidebarHeader>
      <Separator className="mt-[11px]" />

      <SidebarContent className="bg-white pt-4">
        <DashboardSidebarMenu />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <DashboardSidebarBottomMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
