
"use client";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
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
    <nav className="flex flex-col gap-2 p-4 mt-auto">
      {bottomLinks.map((link) => {
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
                isActive && "hover:bg-primary/90"
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
