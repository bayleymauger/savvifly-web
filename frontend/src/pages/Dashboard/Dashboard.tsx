import { Flex, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <VStack spacing="14" align="start">
      <VStack spacing="4" align="start">
        <Text
          as="h1"
          fontFamily="display"
          fontSize="4xl"
          fontWeight="bold"
          color="brand.400"
        >
          Hi {user?.displayName?.split(" ")[0]},
        </Text>
        <Text as="h2" fontSize="xl" color="gray.600">
          Welcome to your dashboard
        </Text>
      </VStack>

      <VStack align="start" width="100%" spacing="4">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          Quick actions
        </Text>
        <SimpleGrid columns={3} spacing="4" width="100%">
          <Flex
            as={Link}
            to="/search"
            align="center"
            justify="center"
            rounded="2xl"
            backgroundColor="white"
            boxShadow="md"
            transition="box-shadow 0.2s ease-in-out"
            height="100px"
            _hover={{ boxShadow: "lg" }}
          >
            <Icon boxSize="8" mr="2" />
            Search for flights, hotels, and activities
          </Flex>
          <Flex
            as={Link}
            to="/tracked?recent"
            align="center"
            justify="center"
            rounded="2xl"
            backgroundColor="white"
            boxShadow="md"
            transition="box-shadow 0.2s ease-in-out"
            height="100px"
            _hover={{ boxShadow: "lg" }}
          >
            <Icon boxSize="8" mr="2" />
            View recently tracked items
          </Flex>
          <Flex
            as={Link}
            to="/alerts"
            align="center"
            justify="center"
            rounded="2xl"
            backgroundColor="white"
            boxShadow="md"
            transition="box-shadow 0.2s ease-in-out"
            height="100px"
            _hover={{ boxShadow: "lg" }}
          >
            <Icon boxSize="8" mr="2" />
            Manage price alerts
          </Flex>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Dashboard;
