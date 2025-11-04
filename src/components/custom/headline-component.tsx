import { Button } from "../ui/button"

const HeadlineComponent = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold pt-24 px-12 text-center">
                Where Future Champions Are Born
            </h1>
            <h2 className="text-2xl  pt-24 px-12 text-center">
                Train hard. Play smart. Be part of a football family that builds tomorrow’s stars.
            </h2>
            <Button className="mt-12 bg-foreground text-background">Contact Us</Button>
        </div>
    )
}

export default HeadlineComponent