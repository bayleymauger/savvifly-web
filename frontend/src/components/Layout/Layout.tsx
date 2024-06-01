import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => (
  <>
    <Header />
    <Box as="main" display="flex" flexDirection="column" flex="1">
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default Layout;
