"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { nav_menus } from "@/utils";
import Link from "next/link";

const mobileItems = nav_menus;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
    setOpen(true);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Button to trigger opening the mobile sheet menu */}
      <SheetTrigger asChild onClick={() => setSelectedMenu(null)}>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-start max-h-[80vh] overflow-y-auto">
          {mobileItems.map((item, index) => (
            <div key={index} className="mb-4">
              <Button
                variant="link"
                onClick={() => handleMenuClick(index)}
                className={selectedMenu === index ? "font-bold" : ""}
              >
                <Link href={item.label.href}>{item.label.title}</Link>
              </Button>
              {selectedMenu === index && (
                <div className="ml-4 space-y-2">
                  {item.submenu?.map((submenu, subIndex) => (
                    <div className="flex flex-row" key={subIndex}>
                      <Button
                        variant="link"
                        onClick={() => {
                          // Handle submenu click
                          setOpen(false);
                          // setSelectedMenu(null);
                        }}
                      >
                        <Link href={submenu.href} className="text-slate-500">
                          {submenu.title}
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
