import Image from "next/image";
import { Button } from "@/components/ui/button";
import ImageFootball from "../../../public/images/image-football.jpg";
import ImageRunner from "../../../public/images/image-runner.jpeg";
import ImageComingSoon from "../../../public/images/image-coming-soon.jpg";

const OurTeamSectionComponent = () => (
    <section className="flex flex-col gap-6 p-6 md:p-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight px-1">
            OUR ATHLETES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                    src={ImageFootball}
                    alt="Football athletes"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-xl font-semibold drop-shadow-lg">
                        MEN&apos;S SOCCER
                    </h3>
                    <Button className="mt-4 bg-pink-600 hover:bg-pink-600/90 text-white px-5 py-2.5 rounded-lg w-fit shadow-md">
                        View Team
                    </Button>
                </div>
            </div>

            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                    src={ImageRunner}
                    alt="Running athletes"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-xl font-semibold drop-shadow-lg">
                        RUNNER
                    </h3>
                    <Button className="mt-4 bg-pink-600 hover:bg-pink-600/90 text-white px-5 py-2.5 rounded-lg w-fit shadow-md">
                        View Team
                    </Button>
                </div>
            </div>

            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl shadow-md">
                <Image
                    src={ImageComingSoon}
                    alt="Coming Soon"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-xl font-semibold drop-shadow-lg">
                        COMING SOON
                    </h3>
                    <Button className="mt-4 bg-pink-600 hover:bg-pink-600/90 text-white px-5 py-2.5 rounded-lg w-fit shadow-md">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

export default OurTeamSectionComponent;
