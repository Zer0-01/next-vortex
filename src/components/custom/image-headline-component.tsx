import { Trophy } from 'lucide-react';
import StatisticContainerComponent from "./statistic-container-component";


const ImageHeadlineComponent = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background image */}


            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue bg-opacity-20 gap-8">
                <h1 className="text-white text-6xl font-bold">
                    VORTEX ACADEMIA
                </h1>
                <div className="flex flex-row">
                    <div>-----</div>
                    < Trophy className="text-white" />
                    <div>-----</div>
                </div>

                <h1 className="text-white text-6xl font-bold">
                    CLUB OF THE CENTURY
                </h1>
                <div className="grid grid-cols-4 gap-4 ">
                    <StatisticContainerComponent title="4" subtitle="Championships" />
                    <StatisticContainerComponent title="4" subtitle="Championships" />
                    <StatisticContainerComponent title="4" subtitle="Championships" />
                    <StatisticContainerComponent title="4" subtitle="Bu" />
                </div>
            </div>
        </div>
    );
};

export default ImageHeadlineComponent;
