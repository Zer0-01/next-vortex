import Image from "next/image"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import jersey1 from "../../../public/image-jersey.png"
import jersey2 from "../../../public/image-jersey.png"


const ProductSectionComponent = () => {
    return (
        <div className="flex flex-col items-center py-16 px-8 gap-8">
            <h1 className="text-white text-3xl text-center ">
                Product
            </h1>
            <div className="flex gap-4 w-full">
                <Card className="grow" >
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
                <Card className="grow" >
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>


        </div>

    )
}
export default ProductSectionComponent