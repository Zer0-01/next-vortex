import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}

function NewsCard({ image, title }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <Image alt="Card background" src={image} width={270} />
      </CardHeader>
      <CardBody>
        <h4>{title}</h4>
      </CardBody>
    </Card>
  );
}

export default NewsCard;
