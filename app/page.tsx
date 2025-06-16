import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Carousel>
        <CarouselContent>
          <CarouselItem>..sdfsfsfsdf.</CarouselItem>
          <CarouselItem>..opkweew.</CarouselItem>
          <CarouselItem>...sdfsdf</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
       
      </Carousel>

    </div>
  );
}
