import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ImageTeam1 from "../../../public/images/image-team-1.jpeg";
import ImageTeam2 from "../../../public/images/image-team-2.jpeg";
import ImageTeam3 from "../../../public/images/image-team-3.jpeg";
import ImageTeam4 from "../../../public/images/image-team-4.jpeg";

const TeamSectionComponent = () => {
    const teamImages = [ImageTeam1, ImageTeam2, ImageTeam3, ImageTeam4];

    return (
        <section className="flex flex-col gap-6 md:gap-10 p-6 md:p-16 bg-white">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900">
                OUR TEAM
            </h2>
            <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                We are athletes from Malaysia who love staying active and building friendships along the way. From university teams to weekend matches, we train hard, have fun, and enjoy every moment together—bonding, staying healthy, and making memories that last a lifetime.
            </p>

            <div className="flex justify-center">
                <Button className="bg-pink-600 hover:bg-pink-600/90 text-white px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                    Learn More
                </Button>
            </div>

            {/* Carousel for mobile */}
            <div className="mt-8 md:hidden relative">
                <Carousel>
                    <CarouselContent className="flex gap-4">
                        {teamImages.map((img, index) => (
                            <CarouselItem
                                key={index}
                                className="relative w-[250px] h-72 flex-shrink-0  overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={img}
                                    alt={`Team member ${index + 1}`}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white/100 rounded-full p-2 shadow-md transition-colors" />
                    <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white/100 rounded-full p-2 shadow-md transition-colors" />
                </Carousel>
            </div>

            {/* Grid for md and above */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-6 mt-8">
                {teamImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src={img}
                            alt={`Team member ${index + 1}`}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSectionComponent;
