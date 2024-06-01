import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";

const Header = () => {
  const {
    user,
    signOut,
    modal: { onOpen },
  } = useAuth();

  return (
    <Box
      as={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      py="4"
      zIndex="banner"
      position="relative"
    >
      <Container maxWidth="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Image src={logo} alt="savvifly" width="140px" />
          </Link>

          {user ? (
            <Button size="lg" onClick={signOut}>
              Sign out
            </Button>
          ) : (
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
