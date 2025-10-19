import { Card, CardAction, CardContent, CardFooter, CardHeader } from "../ui/card";

const MatchCenterSectionComponent = () => {
    return (
        <div className="grid  p-6 gap-8 justify-items-center">

            <div className="text-4xl font-bold">
                Match Center
            </div>
            <div className="text-center">
                Stay updated with Vortex&apos;s latest matches, scores, and upcoming fixtures

            </div>

            <Card className="w-full bg-pink-600 border-0 text-white ">
                <CardHeader>

                    <CardAction>
                        <div>Friendly Match</div>
                    </CardAction>
                </CardHeader>
                <CardContent className="grid grid-cols-3 justify-items-center items-center">
                    <div className=" text-4xl">Vortex</div>
                    <div className=" text-4xl" >
                        2-2
                    </div>
                    <div className=" text-4xl">Vortex</div>
                </CardContent>
                <CardFooter >
                    <div>Goal Scorer&apos;s</div>
                </CardFooter>
            </Card>


        </div>
    );
};

export default MatchCenterSectionComponent