import Headline from "@/components/headline";
import VortexTeamImage from "@/components/vortex-team-image";
import NewsList from "@/components/news-list";

export default function Home() {
  return (
    <>
      <section>
        <Headline />
        <VortexTeamImage />
      </section>
      <section>
        <NewsList />
      </section>
    </>
  );
}
