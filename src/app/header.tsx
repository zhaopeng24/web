"use client";

import Link from "next/link";
import { Plane, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Appointment", href: "/appointment" },
    { name: "Appointment List", href: "/appointment-list" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="flex items-center justify-between px-36 py-4">
      {/* <Plane /> */}
      <Image src="/logo.png" width="30" height="30" alt="logo" />
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Button className={pathname !== link.href ? "text-inherit" : ""} asChild variant="link">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-4">
          <ConnectButton />
        </div>
        {/* <Avatar className="ml-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </div>
    </header>
  );
}
