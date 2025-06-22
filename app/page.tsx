import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

export default function Home() {
  return (
    <section className="flex flex-wrap  gap-4">
      <div className="w-full lg:w-1/3">
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

      <div className="w-full lg:w-1/3">
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
      <div className="w-full lg:w-1/3">
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
  );
}


