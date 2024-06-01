import { Stack, Text } from "@chakra-ui/react";

const HeroLeft = () => (
  <Stack
    justify="center"
    direction="column"
    borderRadius="40"
    backgroundColor="brand.500"
    color="white"
    width="100%"
    height="600px"
    padding="10"
    spacing="8"
  >
    <Text as="h1" fontSize="6xl">
      Fly Savvy,
    </Text>
    <Text as="h2" fontSize="4xl" lineHeight="1.3">
      Travel the world without breaking the bank. Find the best flight deals
      here!
    </Text>
    <Text as="h3">
      Ready to ditch expensive flights? We help budget travelers like you find
      amazing deals. Search & track prices for your dream destinations, and
      we'll alert you when the perfect flight appears. Save big, explore more!
      Let's make travel accessible.
    </Text>
  </Stack>
);

export default HeroLeft;
