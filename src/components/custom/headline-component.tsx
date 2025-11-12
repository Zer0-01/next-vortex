import { Button } from "../ui/button"

const HeadlineComponent = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-16 bg-black">
            <h1 className="text-3xl font-extrabold tracking-tight text-white leading-snug">
                Where Future Champions Are Born
            </h1>

            <p className="text-base text-white/80 mt-4 max-w-md leading-relaxed">
                Train hard. Play smart. Be part of a football family that builds tomorrow’s stars.
            </p>

            <Button className="mt-8 bg-white text-black text-base px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                Contact Us
            </Button>

            <div className="w-full max-w-lg h-56 bg-gray-800 rounded-xl flex items-center justify-center mt-10">
                <span className="text-white/60 text-sm">[ Image Placeholder ]</span>
            </div>
        </section>
    )
}

export default HeadlineComponent
