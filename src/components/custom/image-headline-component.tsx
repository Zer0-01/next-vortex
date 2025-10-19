import { Trophy } from 'lucide-react';
import StatisticContainerComponent from "./statistic-container-component";


const ImageHeadlineComponent = () => {
    return (
        <div className="grid  bg-blue-600 p-8 justify-items-center gap-12 ">
            <h1 className="text-white text-6xl  font-bold text-center">
                VORTEX ACADEMIA
            </h1>
            <div className="grid grid-cols-3 items-center justify-items-center">
                <div>-----</div>
                < Trophy className="text-white " />
                <div>-----</div>
            </div>
            <h1 className="text-white text-4xl  font-bold text-center">
                CLUB OF THE CENTURY
            </h1>
            <div className="grid grid-cols-2 gap-4 ">
                <StatisticContainerComponent title="4" subtitle="Championships" />
                <StatisticContainerComponent title="4" subtitle="Championships" />
                <StatisticContainerComponent title="4" subtitle="Championships" />
                <StatisticContainerComponent title="4" subtitle="Bu" />
            </div>

        </div>
    );
};

export default ImageHeadlineComponent;
