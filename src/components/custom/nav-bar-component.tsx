"use client";

import {
    NavigationMenu,

    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const NavbarComponent = () => {
    return (
        <header className=" bg-background">
            <div className="hidden  md:flex flex-row justify-center items-center gap-2 p-4">
                {/* Brand */}
                <div className="text-xl font-bold">Vortex Academia</div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/our-team">Our Team</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/our-athletes">Our Athletes</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Hamburger */}

            </div>
            <div className="flex justify-between items-center   md:hidden p-4 ">
                <div className="text-xl font-bold">Vortex Academia</div>

                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent className="w-full border-0">
                        <SheetHeader>
                            <SheetTitle>Vortex Academia</SheetTitle>
                            <SheetDescription>
                                <NavigationMenu >
                                    <NavigationMenuList className="flex flex-col gap-4  items-start text-foreground">
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/">Home</NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/our-team">Our Team</NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/our-athletes">Our Athletes</NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default NavbarComponent;
