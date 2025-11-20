'use client';
import Image from "next/image";
import ImageProduct1 from "../../../public/images/image-product-1.jpeg";
import ImageProduct2 from "../../../public/images/image-product-2.jpeg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const products = [
    { image: ImageProduct1 },
    { image: ImageProduct2 },
];

const ProductSectionComponent = () => {
    const router = useRouter();
    const goToJoin = () => {
        router.push("/join");
    }

    return (
        <section className="flex flex-col gap-8 p-6 md:p-12 bg-white">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
                OUR PRODUCTS
            </h1>
            <p className="text-center text-gray-700 text-base md:text-lg max-w-xl mx-auto">
                Discover our premium range of products designed for quality, style, and performance.
            </p>

            <div className="mt-6 flex justify-center">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 md:max-w-4xl w-full">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
                        >
                            <Image
                                src={product.image}
                                alt={`Product ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Button
                    onClick={goToJoin}
                    className="bg-pink-600 hover:bg-pink-600/90 text-white px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg font-semibold transition-transform duration-300 hover:scale-[1.03]">
                    Shop Now
                </Button>
            </div>
        </section>
    )
};

export default ProductSectionComponent;
