"use client";

import { Settings, User, LayoutDashboard, UserCog } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <UserCog className="w-5 h-5" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <User className="w-5 h-5" />,
  },
];

const DashboardSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-3 py-4">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className="group relative rounded-lg"
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Button>

            {/* Active State Indicator */}
            {isActive && (
              <span className="absolute left-0 top-0 h-full w-[3px] bg-primary rounded-r"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardSidebarMenu;
