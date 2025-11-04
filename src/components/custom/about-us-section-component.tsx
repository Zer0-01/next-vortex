import { Button } from "../ui/button"

const AboutUsSectionComponent = () => {
    return (
        <div className="flex flex-col bg-white mt-16 items-center ">
            <h1 className="text-black text-3xl text-center pt-8 px-8">
                Born from Friendship, United by Passion
            </h1>

            <h2 className="text-black  text-center pt-8 px-8">
                What started as a simple way to bond among friends during our school and university days has grown into something much more.
                We’re a team built on trust, laughter, and shared memories — where every match reminds us why we play: for the love of the game and the brotherhood that comes with it.
                Our journey continues, not just as teammates, but as lifelong friends chasing the same passion together.
            </h2>

            <Button className="my-8">Learn More About Us</Button>
        </div>
    )
}

export default AboutUsSectionComponent