import { Image } from "@heroui/image";

import imagevortexbanner from "../public/images/image-vortex-banner.jpg";

function VortexTeamImage() {
  return (
    <Image
      alt="HeroUI hero Image"
      className="w-full"
      src={imagevortexbanner.src}
    />
  );
}

export default VortexTeamImage;
