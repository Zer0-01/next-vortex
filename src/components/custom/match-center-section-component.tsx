import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

const MatchCenterSectionComponent = () => {
    return (
        <div className="grid grid-cols-12 p-6">
            <div></div>
            <div className="flex flex-col col-span-10 items-center gap-4">
                <div className="text-4xl font-bold">
                    Match Center
                </div>
                <div>
                    Stay updated with Vortex&apos;s latest matches, scores, and upcoming fixtures

                </div>
                <Card className="w-full bg-blue-400 border-0 ">
                    <CardHeader>

                        <CardAction>
                            <div>Friendly Match</div>
                        </CardAction>
                    </CardHeader>
                    <CardContent className="flex flex-row items-center">
                        <div className="grow-1 items-center">Vortex</div>
                        <div className="grow-1 flex flex-col text-center">
                            <div> 2-2</div>
                            <div>90</div>

                        </div>
                        <div className="grow-1 text-end">Vortex</div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div></div>
        </div>
    );
};

export default MatchCenterSectionComponent