import { Button } from "../../components/ui/button";
import Image from "next/image";
import TeamImage from "../../../public/images/image-team.jpg";

const HeadlineComponent = () => {
    return (
        <section className="relative flex h-screen flex-col items-center justify-center text-center p-6 sm:p-10 md:p-14 overflow-hidden">

            {/* Background Image */}
            <Image
                src={TeamImage}
                alt="Football team training"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 md:bg-black/50 backdrop-blur-sm z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center max-w-2xl px-4 md:px-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xl">
                    Where Future Champions Are Born
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-md md:max-w-lg leading-relaxed drop-shadow">
                    Train hard. Play smart. Be part of a football family that builds tomorrow’s stars.
                </p>

                <Button
                    className="mt-8 md:mt-10 bg-pink-600 hover:bg-pink-600/90 text-white text-base md:text-lg px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.04]"
                    role="link"
                >
                    Contact Us to Join the Team
                </Button>
            </div>
        </section>
    );
};

export default HeadlineComponent;
