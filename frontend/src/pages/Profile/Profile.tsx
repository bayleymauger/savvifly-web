import { VStack, Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthProvider";

const Profile = () => {
  const { signOut } = useAuth();

  return (
    <VStack>
      <Text>Profile</Text>
      <Button onClick={signOut}>Sign out</Button>
    </VStack>
  );
};

export default Profile;
