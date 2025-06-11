"use client";

import { useState } from "react";
import { HamburgerIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import Link from "next/link";
import { randomMovieRecommendation } from "@/lib/utils";

export default function DrawerMenu() {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState(randomMovieRecommendation[Math.floor(Math.random() * randomMovieRecommendation.length)]);

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) {
            setMovie(randomMovieRecommendation[Math.floor(Math.random() * randomMovieRecommendation.length)]);
        }
    };

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerTrigger className="lg:hidden">
                <HamburgerIcon />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>
                        Explore the sections of the site
                    </DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col gap-6 p-5">
                    {links.map((link) => (
                        <Link href={link.href} key={link.name} className="text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">
                            {link.name}
                        </Link>
                    ))}
                </div>
                <DrawerFooter className="bg-brutal-background text-center">
                    <p className="text-sm text-gray-500">
                        Random Movie Recommendation: <span className="font-semibold">{movie}</span>
                    </p>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}