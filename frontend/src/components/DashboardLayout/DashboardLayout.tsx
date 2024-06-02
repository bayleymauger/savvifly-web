import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Image,
} from "@chakra-ui/react";
import PrivateRoute from "../PrivateRoute";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";

// TODO: Split these components into separate files
const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PrivateRoute>
      <Flex
        display="flex"
        flex="1"
        backgroundColor="gray.50"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box display={{ base: "none", md: "initial" }}>
          <Sidebar />
        </Box>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Sidebar onNavigate={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex
          display={{ base: "flex", md: "none" }}
          backgroundColor="white"
          py="4"
          align="center"
          position="relative"
        >
          <IconButton
            icon={<FaBars />}
            aria-label="Menu"
            onClick={onOpen}
            position="absolute"
            left="2"
            variant="ghost"
          />
          <Image src={logo} alt="trip hawk logo" width="140px" mx="auto" />
        </Flex>
        <Box
          as={motion.main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          padding="10"
          flex="1"
        >
          <Outlet />
        </Box>
      </Flex>
    </PrivateRoute>
  );
};

export default DashboardLayout;
