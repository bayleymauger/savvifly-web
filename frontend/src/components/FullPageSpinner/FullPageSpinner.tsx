import { Flex, Spinner, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

const FullPageSpinner = () => (
  <Flex
    height="100vh"
    width="100%"
    justify="center"
    align="center"
    direction="column"
    px="4"
  >
    <Image src={logo} alt="trip hawk logo" maxWidth="360px" mb="8" />
    <Spinner size="xl" thickness="4px" color="#FFCB5D" />
  </Flex>
);

export default FullPageSpinner;
