import { Box, Flex } from "@chakra-ui/react";
import PrivateRoute from "../PrivateRoute";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";

const DashboardLayout = () => (
  <PrivateRoute>
    <Flex display="flex" flex="1" backgroundColor="gray.50">
      <Sidebar />
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

export default DashboardLayout;
