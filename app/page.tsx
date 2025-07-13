import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

import Headline from "@/components/headline";
import VortexTeamImage from "@/components/vortex-team-image";

export default function Home() {
  return (
    <>
      <section>
        <Headline />
        <VortexTeamImage />
      </section>
      <section className="grid grid-cols-12  gap-4">
        <div className="col-span-12 md:col-span-4 ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-4 ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4 ">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardBody>
          </Card>
        </div>
      </section>
      <section>
        <h1 className="text-center">Vortex Official Worldwide Store</h1>
      </section>
    </>
  );
}
