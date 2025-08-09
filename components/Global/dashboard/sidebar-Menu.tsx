"use client";
import {
  Settings,
  User,
  LayoutDashboard,
  UserCog,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility for className concatenation

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="size-5" />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <UserCog className="size-5" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="size-5" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <User className="size-5" />,
  },
];

const DashboardSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "rounded-md transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 p-3",
                isActive && "hover:bg-primary/90 hover:text-white"
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardSidebarMenu;
