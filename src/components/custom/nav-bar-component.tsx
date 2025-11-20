"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const NavbarComponent = () => {
    return (
        <header className="bg-background shadow-md">
            <div className="flex justify-between items-center p-4 md:px-10 md:py-6">
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Vortex Academia
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="p-2 rounded-md shadow hover:bg-gray-100">
                                <Menu className="w-6 h-6 text-gray-800" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="w-full border-0 p-6">
                            <SheetHeader className="mb-6">
                                <SheetTitle className="text-2xl font-bold">Vortex Academia</SheetTitle>
                            </SheetHeader>
                            <NavigationMenu>
                                <NavigationMenuList className="flex flex-col space-y-4">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/" className="text-lg font-medium">
                                            Home
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/our-team" className="text-lg font-medium">
                                            Our Team
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/our-athletes" className="text-lg font-medium">
                                            Our Athletes
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden md:flex md:items-center md:gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="text-lg font-medium hover:text-pink-600 transition-colors">
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/join" className="text-lg font-medium hover:text-pink-600 transition-colors">
                                    Our Team
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/join" className="text-lg font-medium hover:text-pink-600 transition-colors">
                                    Our Athletes
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
};

export default NavbarComponent;
