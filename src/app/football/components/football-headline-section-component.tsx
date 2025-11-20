"use client";

import Image from "next/image";
import ImageFootballHeadline from "../../../../public/images/image-team.jpg";
import { Button } from "@/components/ui/button";

const FootballHeadlineSectionComponent = () => {
    return (
        <section className="relative flex h-[420px] md:h-[500px] w-full items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={ImageFootballHeadline}
                alt="Football Team Training"
                fill
                sizes="100vw"
                priority
                className="object-cover object-center"
            />

            {/* Dark Overlay + Gradient Fade */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-xl">
                    Train Hard. Play Smart.
                </h1>

                <p className="text-white/90 mt-4 text-base md:text-lg leading-relaxed drop-shadow">
                    Join our football academy and become part of a team that builds future champions.
                </p>

                <Button
                    className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg text-base md:text-lg transition-all"
                >
                    Join the Team
                </Button>
            </div>
        </section>
    );
};

export default FootballHeadlineSectionComponent;
