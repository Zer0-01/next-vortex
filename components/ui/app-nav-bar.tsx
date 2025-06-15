"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"


export function AppNavBar() {
    return (
        <NavigationMenu 
        className="p-3 bg-primary w-full "
        viewport={false}>
            <NavigationMenuList>
                <Link href="/">
                    <Avatar>
                        <Image
                            src="/logo-vortex.png"
                            alt="@shadcn"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    </Avatar>
                </Link>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs">About Us</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

