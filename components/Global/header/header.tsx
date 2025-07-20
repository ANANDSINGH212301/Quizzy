import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";

import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "#", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "#",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  {
    label: "Pricing",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Product A" },
      { href: "#", label: "Product B" },
      { href: "#", label: "Product C" },
      { href: "#", label: "Product D" },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
      { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
      { href: "#", label: "About Us", icon: "InfoIcon" },
    ],
  },
];

export default function Header() {
  return (
    <header className="border border-[#EDE9F9] bg-[#FAF8FF] px-4 py-2 mx-2 my-1 md:px-6 absolute top-0 left-0 right-0 z-50 rounded-lg shadow-sm">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12L20 12" className="origin-center -translate-y-[7px] group-aria-expanded:rotate-45" />
                  <path d="M4 12H20" />
                  <path d="M4 12H20" className="origin-center translate-y-[7px] group-aria-expanded:rotate-45" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white rounded-lg border border-[#EDE9F9]">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-sm text-[#6B4EFF] px-2 py-1.5 font-medium">{link.label}</div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink href={item.href} className="block px-2 py-1.5 text-sm hover:text-[#6B4EFF]">
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5 px-2 text-sm hover:text-[#6B4EFF]">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6B4EFF] hover:opacity-80">
              <Logo />
            </a>
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-[#6B4EFF] hover:bg-[#EDE9F9] bg-transparent px-2 py-1.5 font-medium rounded-md">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 p-2 bg-white rounded-md border border-[#EDE9F9] shadow-md">
                          <ul className={cn(link.type === "description" ? "min-w-64" : "min-w-48")}>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink href={item.href} className="block px-2 py-1.5 hover:text-[#6B4EFF]">
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2">
                                      {item.icon === "BookOpenIcon" && <BookOpenIcon size={16} className="text-muted" />}
                                      {item.icon === "LifeBuoyIcon" && <LifeBuoyIcon size={16} className="text-muted" />}
                                      {item.icon === "InfoIcon" && <InfoIcon size={16} className="text-muted" />}
                                      <span>{item.label}</span>
                                    </div>
                                  )}
                                  {link.type === "description" && "description" in item ? (
                                    <div className="space-y-1">
                                      <div className="font-medium">{item.label}</div>
                                      <p className="text-xs text-muted-foreground">{item.description}</p>
                                    </div>
                                  ) : (
                                    !link.type ||
                                    (link.type !== "icon" && link.type !== "description" && <span>{item.label}</span>)
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="text-[#6B4EFF] hover:text-[#5C3AD2] py-1.5 font-medium"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm text-[#6B4EFF] hover:bg-[#EDE9F9]">
            <a href="/login">Sign In</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="text-sm bg-gradient-to-r from-[#7C5BFF] to-[#5D3EFF] text-white hover:from-[#6B4EFF] hover:to-[#4C32E2]"
          >
            <a href="/register">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

