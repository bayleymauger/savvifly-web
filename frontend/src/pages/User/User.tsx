import { VStack, Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthProvider";

const User = () => {
  const { signOut } = useAuth();

  return (
    <VStack>
      <Text>User</Text>
      <Button onClick={signOut}>Sign out</Button>
    </VStack>
  );
};

export default User;
