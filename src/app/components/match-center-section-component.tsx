import { Card, CardContent } from "@/components/ui/card";

const MatchCenterSectionComponent = () => {
    return (
        <section className="p-6 md:p-10 bg-[#0f0f0f] text-white">
            <Card className="bg-[#141414] border border-white/10 shadow-xl rounded-2xl">
                <CardContent className="p-6 md:p-10 flex flex-col gap-8 md:gap-10">

                    <div className="text-center">
                        <p className="text-xs md:text-sm font-medium text-white/50 tracking-widest">
                            FULL TIME
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1 flex justify-center">
                            <p className="text-lg md:text-2xl font-semibold text-white text-center md:text-left">
                                Vortex Academia
                            </p>
                        </div>

                        <div className="px-4 py-2">
                            <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center">
                                2
                                <span className="text-white/40"> — </span>
                                0
                            </p>
                        </div>

                        <div className="flex-1 flex justify-center ">
                            <p className="text-lg md:text-2xl font-semibold text-white text-center md:text-right">
                                Batik Air
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="font-semibold text-white">IKI</span>
                            <span className="text-white/70">37&apos;</span>
                        </div>

                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10">
                            <span className="font-semibold text-white">KEWAN</span>
                            <span className="text-white/70">68&apos;</span>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </section>
    );
};

export default MatchCenterSectionComponent;
