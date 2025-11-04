import { Button } from "../ui/button"

const OurTeamSectionComponent = () => {
    return (
        <div className="flex flex-col bg-white  items-center ">
            <h1 className="text-black text-3xl text-center pt-16 px-8">
                Our Team, Our Family
            </h1>

            <h2 className="text-black  text-center pt-8 px-8">
                We’re more than just a group of players — we’re friends who grew up together, from school to university, united by our love for the game.
                Over the years, football has been more than a sport for us — it’s been our way of staying connected, building trust, and keeping the bond alive through every goal, win, and laugh we share.
                Together, we play with heart, passion, and friendship — because that’s what our team truly stands for.
            </h2>

            <Button className="my-8">Meet the Team</Button>
        </div>
    )
}

export default OurTeamSectionComponent
