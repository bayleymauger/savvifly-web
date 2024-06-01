import { Button, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAuth } from "../../../../contexts/AuthProvider";

const HeroRight = () => {
  const { modal } = useAuth();

  return (
    <Stack
      spacing="4"
      justify="center"
      direction="column"
      color="brand.400"
      width="30%"
    >
      <Text
        as={motion.h1}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
        fontFamily="display"
        fontSize="4xl"
      >
        Travel Smarter, Not Harder: Your All-in-One Price Tracking App.
      </Text>
      <Stack
        spacing="6"
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        <Text as="h2" fontSize="xl">
          Set price alerts for flights, hotels, and activities. Get notified
          when prices drop and book your dream trip for less.
        </Text>
        <Button size="lg" onClick={modal.onOpen}>
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeroRight;
