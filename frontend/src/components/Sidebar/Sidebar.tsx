import {
  Button,
  Flex,
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

const MISC_ROUTES: AuthenticatedRouteKey[] = ["/profile", "/settings"];

type NavItem = {
  title: string;
  icon: IconType;
};

const NAV_MAP: {
  [key in AuthenticatedRouteKey]: NavItem;
} = {
  ["/dashboard"]: { title: "Dashboard", icon: MdSpaceDashboard },
  ["/profile"]: { title: "Profile", icon: FaUser },
  ["/settings"]: { title: "Settings", icon: FaCog },
  ["/search"]: { title: "Search", icon: FaSearch },
  ["/tracked"]: { title: "Tracked", icon: CgTrack },
  ["/alerts"]: { title: "Alerts", icon: FaBell },
};

type SidebarProps = {
  onNavigate?: () => void;
};

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const location = useLocation();
  const authenticatedRouteKeys = Object.keys(
    NAV_MAP
  ) as AuthenticatedRouteKey[];

  const renderListItem = (path: AuthenticatedRouteKey, index: number) => {
    const isActivePath = location.pathname === path;
    const variant = isActivePath ? "solid" : "ghost";
    const animationTiming = 0.05;
    const animationDelay = animationTiming * index;
    const navItem = NAV_MAP[path];
    const Icon = navItem.icon;
    const title = navItem.title;

    return (
      <ListItem
        as={motion.li}
        key={path}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: animationDelay } }}
      >
        <Button
          as={Link}
          to={path}
          variant={variant}
          leftIcon={<Icon color="gray.700" fontSize="initial" />}
          iconSpacing={{ base: "2", md: "0" }}
          fontWeight="normal"
          fontSize={{ base: "initial", md: "0" }}
          display="flex"
          justifyContent="flex-start"
          onClick={onNavigate}
        >
          {title}
        </Button>
      </ListItem>
    );
  };

  return (
    <Flex
      as="nav"
      background="white"
      boxShadow={{ base: "none", md: "lg" }}
      zIndex="1"
      rounded="2xl"
      px={{ base: "0", md: "4" }}
      py="4"
      justify="space-between"
      align="center"
      direction="column"
      height="100%"
    >
      <VStack spacing="8" width="100%">
        <Image
          as={motion.img}
          src={logo}
          alt="trip hawk logo"
          maxWidth="140px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <UnorderedList width="100%" listStyleType="none" margin="0" spacing="4">
          {authenticatedRouteKeys
            .filter((route) => !MISC_ROUTES.includes(route))
            .map(renderListItem)}
        </UnorderedList>
      </VStack>
      <UnorderedList width="100%" listStyleType="none" margin="0" spacing="4">
        {authenticatedRouteKeys
          .filter((route) => MISC_ROUTES.includes(route))
          .map(renderListItem)}
      </UnorderedList>
    </Flex>
  );
};

export default Sidebar;
