import { Image } from "@heroui/image";

import imagevortexbanner from "../public/images/image-vortex-banner.jpg";

function VortexTeamImage() {
  return (
    <Image
      alt="HeroUI hero Image"
      className="w-screen"
      src={imagevortexbanner.src}
      width={2180}
    />
  );
}

export default VortexTeamImage;
