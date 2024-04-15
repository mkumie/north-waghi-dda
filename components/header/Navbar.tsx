"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Icons } from "../Icons";
import { cn } from "@/lib/utils";
import {
  // about_components,
  // business_components,
  // community_components,
  // engage_components,
  nav_menus,
  // news_components,
  // online_components,
} from "@/utils";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenu className="mx-auto flex flex-row">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
              href="/"
            >
              <div className="text-sm font-medium leading-none">Home</div>
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {nav_menus.map((component, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link href={component.label.href}>
                <NavigationMenuTrigger onClick={handleMenuClick}>
                  {component.label.title}
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className={isOpen ? "active" : ""}>
                <ul className="w-[160px]">
                  {component.submenu?.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
