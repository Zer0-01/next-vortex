"use client";

import Image from "next/image";
import ImageFootballHeadline from "../../../../public/images/image-team.jpg";
import { Button } from "@/components/ui/button";

const FootballHeadlineSectionComponent = () => {
    return (
        <section className="relative flex h-96 flex-col items-center justify-center text-center p-6 overflow-hidden rounded-xl shadow-lg">
            <Image
                src={ImageFootballHeadline}
                alt="Football Team Training"
                fill
                sizes="100vw"

                className="object-cover object-center"
                priority
            />

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

            <div className="relative z-20 flex flex-col items-center max-w-xl px-4">
                <h1 className="text-3xl font-extrabold text-white leading-snug drop-shadow-lg">
                    Train Hard. Play Smart.
                </h1>
                <p className="text-white/90 mt-3 text-base leading-relaxed drop-shadow">
                    Join our football academy and become part of a team that builds future champions.
                </p>
                <Button className="mt-5 bg-pink-600 hover:bg-pink-600/90 text-white px-6 py-3 rounded-full shadow-md">
                    Join the Team
                </Button>
            </div>
        </section>
    );
};

export default FootballHeadlineSectionComponent;
