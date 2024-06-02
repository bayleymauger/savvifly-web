import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";

const Header = () => {
  const {
    user,
    modal: { onOpen },
  } = useAuth();

  return (
    <Box
      as={motion.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      py="4"
      zIndex="banner"
      position="relative"
    >
      <Container maxWidth="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Image src={logo} alt="trip hawk logo" width="140px" />
          </Link>

          {!user && (
            <Button size="lg" onClick={onOpen}>
              Sign in
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
