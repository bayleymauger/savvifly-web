import { Stack } from "@chakra-ui/react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <Stack direction="row" justify="space-between">
      <HeroLeft />
      <HeroRight />
    </Stack>
  );
};

export default Hero;
