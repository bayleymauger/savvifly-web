import { Container, VStack } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

const Home = () => {
  return (
    <Container minWidth="container.xl" minHeight="95vh">
      <VStack spacing="32">
        <Hero />
        <Benefits />
      </VStack>
    </Container>
  );
};

export default Home;
