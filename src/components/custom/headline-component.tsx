import { Button } from "../ui/button";
import Image from "next/image";
import TeamImage from "../../../public/images/image-team.jpg";

const HeadlineComponent = () => {
    return (
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center text-center p-6 sm:p-10">
            <Image
                src={TeamImage}
                alt="Football team training under lights"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="z-0"
                // The 'sizes' prop is often less critical when using local imports 
                // but kept here for responsive performance guidance.
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="relative z-20 flex flex-col items-center max-w-xl py-16">

                <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight sm:text-5xl">
                    Where Future Champions Are Born
                </h1>

                <p className="text-lg text-white/90 mt-5 max-w-md leading-relaxed">
                    Train hard. Play smart. Be part of a football family that builds tomorrow’s stars.
                </p>

                <Button
                    className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    role="link"
                >
                    Contact Us to Join the Team
                </Button>

                <div className="mt-6 text-sm text-white/70">
                    Programs available for all ages.
                </div>
            </div>
        </section>
    );
};

export default HeadlineComponent;