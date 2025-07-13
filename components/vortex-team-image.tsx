import { Image } from "@heroui/image";

import imagevortexbanner from "../public/images/image-vortex-banner.jpg";

function VortexTeamImage() {
  return (
    <Image alt="HeroUI hero Image" src={imagevortexbanner.src} width={300} />
  );
}

export default VortexTeamImage;
