import {
  Button,
  Flex,
  Icon,
  ListItem,
  UnorderedList,
  Image,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { FaSearch, FaBell, FaCog, FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { CgTrack } from "react-icons/cg";
import { useLocation, Link } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../App";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type AuthenticatedRouteKey = keyof typeof AUTHENTICATED_ROUTES;

const ICON_MAP: { [key in AuthenticatedRouteKey]: IconType } = {
  ["/dashboard"]: MdSpaceDashboard,
  ["/user"]: FaUser,
  ["/settings"]: FaCog,
  ["/search"]: FaSearch,
  ["/tracked"]: CgTrack,
  ["/alerts"]: FaBell,
};

const MISC_ROUTES: AuthenticatedRouteKey[] = ["/user", "/settings"];

const Sidebar = () => {
  const location = useLocation();
  const authenticatedRouteKeys = Object.keys(
    AUTHENTICATED_ROUTES
  ) as AuthenticatedRouteKey[];

  const renderListItem = (path: AuthenticatedRouteKey, index: number) => {
    const isActivePath = location.pathname === path;
    const variant = isActivePath ? "solid" : "ghost";
    const animationTiming = 0.05;
    const animationDelay = animationTiming * index;

    return (
      <ListItem
        as={motion.li}
        key={path}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: animationDelay } }}
      >
        <Button as={Link} to={path} variant={variant}>
          <Icon as={ICON_MAP[path]} color="gray.700" />
        </Button>
      </ListItem>
    );
  };

  return (
    <Flex
      as="nav"
      background="white"
      boxShadow="lg"
      zIndex="1"
      rounded="2xl"
      padding="4"
      justify="space-between"
      align="center"
      direction="column"
    >
      <VStack spacing="8">
        <Image
          as={motion.img}
          src={logo}
          alt="trip hawk logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <UnorderedList listStyleType="none" margin="0" spacing="4">
          {authenticatedRouteKeys
            .filter((route) => !MISC_ROUTES.includes(route))
            .map(renderListItem)}
        </UnorderedList>
      </VStack>
      <UnorderedList listStyleType="none" margin="0" spacing="4">
        {authenticatedRouteKeys
          .filter((route) => MISC_ROUTES.includes(route))
          .map(renderListItem)}
      </UnorderedList>
    </Flex>
  );
};

export default Sidebar;
