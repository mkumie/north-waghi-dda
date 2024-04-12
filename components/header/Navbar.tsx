"use client";

import React from "react";
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
  about_components,
  business_components,
  community_components,
  engage_components,
  gov_components,
  news_components,
  online_components,
} from "@/utils";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    // <NavigationMenu className="mx-auto flex flex-row justify-end">
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Government Services</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {gov_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>

    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {dept_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>

    //     {/* <NavigationMenuItem>
    //       <NavigationMenuTrigger>Elected Officials</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {elected_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem> */}

    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Public Notices</NavigationMenuTrigger>
    //       <NavigationMenuContent className="right:0 absolute left-auto top-full w-auto">
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {notice_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenu className="mx-auto flex flex-row justify-end">
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>Community Resources</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //             {community_components.map((component) => (
    //               <ListItem
    //                 key={component.title}
    //                 title={component.title}
    //                 href={component.href}
    //               >
    //                 {component.description}
    //               </ListItem>
    //             ))}
    //           </ul>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //     </NavigationMenu>
    //     {/* <NavigationMenuItem>
    //       <NavigationMenuTrigger>Public Safety</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {safety_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem> */}

    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Business Resources</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //           {business_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {component.description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>

    //     <NavigationMenu>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>Online Services</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //             {online_components.map((component) => (
    //               <ListItem
    //                 key={component.title}
    //                 title={component.title}
    //                 href={component.href}
    //               >
    //                 {component.description}
    //               </ListItem>
    //             ))}
    //           </ul>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //       <NavigationMenu className="mx-auto flex flex-row justify-end"></NavigationMenu>
    //       <NavigationMenuItem>
    //         <NavigationMenuTrigger>News and Updates</NavigationMenuTrigger>
    //         <NavigationMenuContent>
    //           <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    //             {news_components.map((component) => (
    //               <ListItem
    //                 key={component.title}
    //                 title={component.title}
    //                 href={component.href}
    //               >
    //                 {component.description}
    //               </ListItem>
    //             ))}
    //           </ul>
    //         </NavigationMenuContent>
    //       </NavigationMenuItem>
    //     </NavigationMenu>

    //     {/* <NavigationMenuItem>
    //       <Link href="/docs" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           Documentation
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem> */}
    //   </NavigationMenuList>
    // </NavigationMenu>

    // <NavigationMenu className="mx-auto flex flex-row">
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuLink asChild>
    //         <a
    //           className={cn(
    //             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    //           )}
    //           href="/"
    //         >
    //           <div className="text-sm font-medium leading-none">Home</div>
    //         </a>
    //       </NavigationMenuLink>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Government Services</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {gov_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Departments & Officials</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {dept_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Meetings & Events</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {notice_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Business Resources</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {business_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Community Resources</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {community_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Online Services</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {online_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Public Safety</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {safety_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {contact_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <ul className="w-[190px]">
    //           {about_components.map((component) => (
    //             <ListItem
    //               key={component.title}
    //               title={component.title}
    //               href={component.href}
    //             >
    //               {/* {component.description} */}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>

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
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={() => router.push("/gov")}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {gov_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {community_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>News & Updates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {news_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Engagement {/* & Participation */}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {engage_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Business Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {business_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Online Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {online_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[160px]">
              {about_components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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

// work on aligning menu links relative to the menu item - done! But solve transition at the ui level
