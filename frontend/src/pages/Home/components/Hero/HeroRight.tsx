import { Button, Flex, Input, Stack } from "@chakra-ui/react";

const HeroRight = () => (
  <Flex
    width="100%"
    backgroundColor="brandDark.400"
    borderRadius="40"
    justify="center"
    align="center"
    padding="16"
  >
    <Stack
      backgroundColor="white"
      borderRadius="40"
      width="100%"
      height="100%"
      padding="8"
      spacing="4"
    >
      <Input placeholder="2 Adult, 1 Children" />

      <Input placeholder="From" />
      <Input placeholder="To" />

      <Input placeholder="Depart" />
      <Input placeholder="Return" />

      <Button size="lg">Search</Button>
    </Stack>
  </Flex>
);

export default HeroRight;
