import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ImageFootballPlayer from "../../../../public/images/image-football-player.jpeg";

const positions = [
    {
        title: "Goalkeeper",
        players: [
            { name: "Aniq", number: null, position: "Goalkeeper" },
            { name: "Zaim", number: null, position: "Goalkeeper" },
        ],
    },
    {
        title: "Defense",
        players: [
            { name: "Den", number: null, position: "Defender" },
            { name: "Lan", number: null, position: "Defender" },
            { name: "KC", number: null, position: "Defender" },
            { name: "Afig", number: null, position: "Defender" },
            { name: "Oni", number: null, position: "Defender" },
            { name: "Paredooo", number: null, position: "Defender" },
            { name: "Nap", number: null, position: "Defender (TBC)" },
            { name: "GP", number: null, position: "Defender (TBC)" },
        ],
    },
    {
        title: "Midfield",
        players: [
            { name: "Kewan", number: null, position: "Midfielder" },
            { name: "Harith", number: null, position: "Midfielder" },
            { name: "Black", number: null, position: "Midfielder" },
            { name: "Blek", number: null, position: "Midfielder" },
            { name: "Mil", number: null, position: "Midfielder" },
            { name: "Garnapiz", number: null, position: "Midfielder" },
        ],
    },
    {
        title: "Forward",
        players: [
            { name: "Hadi", number: null, position: "Forward" },
            { name: "Addien", number: null, position: "Forward" },
            { name: "KONG", number: null, position: "Forward" },
            { name: "Mil", number: null, position: "Forward" },
            { name: "Lan", number: null, position: "Forward" },
            { name: "Amad", number: null, position: "Forward" },
        ],
    },
];

const FootballTeamSectionComponent = () => (
    <section className="flex flex-col gap-10 p-6 bg-[#0f0f0f] text-white md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            MEN&apos;S FOOTBALL TEAM
        </h1>

        {positions.map((pos, index) => (
            <div key={index} className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white/90">
                    {pos.title}
                </h2>

                <div className="flex gap-5 overflow-x-auto no-scrollbar py-2 md:py-3">
                    {pos.players.map((player, i) => (
                        <Card
                            key={i}
                            className="min-w-[160px] md:min-w-[200px] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-xl shadow-black/40 backdrop-blur-sm hover:scale-[1.02] transition-transform"
                        >
                            <CardContent className="p-4 flex flex-col items-center gap-4">
                                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg ring-1 ring-white/10">
                                    <Image
                                        src={ImageFootballPlayer}
                                        alt={player.name}
                                        fill
                                        className="object-cover"
                                        sizes="120px"
                                    />
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <p className="text-lg md:text-xl font-semibold text-white">
                                        {player.name}
                                    </p>
                                    <p className="text-sm md:text-base text-white/70">
                                        {player.number ? `#${player.number} • ` : ""}
                                        {player.position}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        ))}
    </section>
);

export default FootballTeamSectionComponent;
