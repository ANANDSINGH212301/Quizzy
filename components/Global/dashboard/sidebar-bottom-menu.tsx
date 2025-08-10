"use client";

import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const bottomLinks = [
  {
    label: "Logout",
    href: "/logout",
    icon: <IoLogOutOutline className="size-5" />,
  },
];

const DashboardSidebarBottomMenu = () => {
  const pathname = usePathname();

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
    </nav>
  );
};

export default DashboardSidebarBottomMenu;
