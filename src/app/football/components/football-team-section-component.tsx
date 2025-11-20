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
    <section className="flex flex-col gap-8 p-6 bg-[#0f0f0f] text-white">
        <h1 className="text-3xl font-bold">MEN&apos;S FOOTBALL TEAM</h1>

        {positions.map((pos, index) => (
            <div key={index} className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{pos.title}</h2>

                <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                    {pos.players.map((player, i) => (
                        <Card
                            key={i}
                            className="min-w-[170px] rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-lg overflow-hidden"
                        >
                            <CardContent className="p-4 flex flex-col items-center gap-4">
                                <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg shadow-black/40">
                                    <Image
                                        src={ImageFootballPlayer}
                                        alt={player.name}
                                        fill
                                        className="object-cover"
                                        sizes="112px"
                                    />
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <p className="text-lg font-semibold text-white">
                                        {player.name}
                                    </p>
                                    <p className="text-sm text-white/70">
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
