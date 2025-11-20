import FootballHeadlineSectionComponent from "./components/football-headline-section-component";
import FootballTeamSectionComponent from "./components/football-team-section-component";

const FootballPage = () => {
    return (
        <div className="flex flex-col">
            <FootballHeadlineSectionComponent />
            <FootballTeamSectionComponent />
        </div>
    );
};

export default FootballPage;