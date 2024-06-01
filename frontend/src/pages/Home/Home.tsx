import { Container } from "@chakra-ui/react";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <Container minWidth="container.xl" minHeight="95vh">
      <Hero />
    </Container>
  );
};

export default Home;
