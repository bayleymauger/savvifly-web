import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import savviflyLogo from "../../assets/savvifly.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <Box as="header" py="4" zIndex="banner" position="relative">
      <Container maxWidth="container.xl">
        <Flex justify="space-between">
          <Link to="/">
            <Image src={savviflyLogo} alt="savvifly" width="140px" />
          </Link>

          {user ? (
            <Button size="lg" onClick={signOut}>
              Sign out
            </Button>
          ) : (
            <Link to="/auth">
              <Button size="lg">Sign in</Button>
            </Link>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
