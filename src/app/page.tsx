import AboutUsSectionComponent from "@/components/custom/about-us-section-component";
import HeadlineComponent from "@/components/custom/headline-component";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeadlineComponent />
      <AboutUsSectionComponent />

    </div>

  );
}
