import { Stack, Image } from "@chakra-ui/react";
import hero from "../../../../assets/hero.svg";
import { motion } from "framer-motion";

const HeroLeft = () => (
  <Stack
    as={motion.div}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
    justify="center"
    direction="column"
    width="70%"
  >
    <Image src={hero} />
  </Stack>
);

export default HeroLeft;
