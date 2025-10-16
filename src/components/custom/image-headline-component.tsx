import Image from "next/image";
import { Trophy } from 'lucide-react';


const ImageHeadlineComponent = () => {
    return (
        <div className="relative w-full h-screen bg-black opacity-60">
            {/* Background image */}


            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue bg-opacity-20">
                <h1 className="text-white text-6xl font-bold">
                    Vortex Academia
                </h1>
                < Trophy className="text-white" />
                <h1 className="text-white text-6xl font-bold">
                    CLUB OF THE CENTURY
                </h1>
                <div className="grid grid-cols-4 gap-4 ">
                    <div className="flex flex-col  justify-center items-center bg-amber-300 rounded-md px-8 py-2">
                        <div className="text-white text-6xl font-bold">
                            4
                        </div>
                        <div>
                            Title
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageHeadlineComponent;
