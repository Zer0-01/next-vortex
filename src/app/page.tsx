import HeadlineComponent from "@/app/components/headline-component";
import OurTeamSectionComponent from "./components/our-team-section-component";
import TeamSectionComponent from "./components/team-section-component";
import MatchCenterSectionComponent from "./components/match-center-section-component";
import ProductSectionComponent from "./components/product-section-component";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeadlineComponent />
      <MatchCenterSectionComponent />
      <OurTeamSectionComponent />
      <TeamSectionComponent />
      <ProductSectionComponent />



    </div>

  );
}
