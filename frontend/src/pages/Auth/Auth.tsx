import { Box, Flex, HStack, StyleProps } from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../../firebase";
import FirebaseAuth from "./components/FirebaseAuth";

const Auth = () => (
  <Flex align="center" justify="center" flex="1">
    <HStack position="absolute" top="0" left="0" height="100%" width="100%">
      <Box height="100%" width="50%" backgroundColor="brand.500" />
      <Box height="100%" width="50%" />
    </HStack>
    <Flex justify="center" align="center" {...AuthCardStyles}>
      <FirebaseAuth
        firebaseAuth={auth}
        uiConfig={{
          signInSuccessUrl: "/",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          ],
        }}
      />
    </Flex>
  </Flex>
);

const AuthCardStyles: StyleProps = {
  backgroundColor: "white",
  maxWidth: "640px",
  width: "100%",
  height: "640px",
  borderRadius: "xl",
  zIndex: "1",
  boxShadow: "xl",
};

export default Auth;
