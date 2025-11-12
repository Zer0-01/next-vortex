import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import jersey1 from "../../../public/image-jersey.png"


const ProductSectionComponent = () => {
    return (
        <div className="flex flex-col items-center py-16 px-8 gap-8">
            <h1 className="text-white text-3xl text-center ">
                Product
            </h1>

            <Card className="w-full" >
                <CardHeader>
                    <CardTitle>
                        <div className="relative w-full max-w-3xl h-64 sm:h-80 md:h-[500px]">
                            <Image
                                src={jersey1}
                                alt="about us image"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>                        </CardTitle>

                </CardHeader>
                <CardContent className="text-center">
                    <p>2024/2025</p>
                </CardContent>

            </Card>
            <Card className="w-full" >
                <CardHeader>
                    <CardTitle>
                        <div className="relative w-full max-w-3xl h-64 sm:h-80 md:h-[500px]">
                            <Image
                                src={jersey1}
                                alt="about us image"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>                        </CardTitle>

                </CardHeader>
                <CardContent className="text-center">
                    <p>2024/2025</p>
                </CardContent>

            </Card>



        </div>

    )
}
export default ProductSectionComponent