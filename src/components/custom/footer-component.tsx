"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Instagram, Twitter, Facebook } from "lucide-react";

const FooterComponent = () => {
    const router = useRouter();
    const goToJoin = () => {
        router.push("/join");
    }
    return (
        <footer className="flex flex-col items-center gap-6 bg-black p-6 md:p-10 md:gap-8">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold text-center leading-snug">
                Meet Vortex Academia Today
            </h1>
            <h2 className="text-white text-xl md:text-2xl font-semibold text-center leading-snug">
                Join Us for Free
            </h2>
            <Button
                onClick={goToJoin}
                className="bg-pink-600 hover:bg-pink-600/90 text-white px-6 py-3 rounded-full shadow-md w-fit">
                Join Vortex Free
            </Button>
            <h3 className="text-gray-400 text-sm md:text-base mt-2">
                ©2025 Vortex Academia
            </h3>
            <div className="flex flex-row gap-5 mt-3">
                <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
                <Twitter className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
                <Facebook className="w-6 h-6 text-white hover:text-blue-600 transition-colors" />
            </div>
            <p className="text-gray-500 text-xs md:text-sm mt-4">
                Created by LakarSoft
            </p>
        </footer>
    );
};

export default FooterComponent;
