import AboutUsSectionComponent from "@/components/custom/about-us-section-component";
import HeadlineComponent from "@/components/custom/headline-component";
import OurTeamSectionComponent from "@/components/custom/our-team-section-component";
import ProductSectionComponent from "@/components/custom/product-section-component";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeadlineComponent />
      <AboutUsSectionComponent />
      <OurTeamSectionComponent />
      <ProductSectionComponent />


    </div>

  );
}
