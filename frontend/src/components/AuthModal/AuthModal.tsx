import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../../firebase";
import FirebaseAuth from "../FirebaseAuth";

export type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent py="8">
      <ModalHeader>
        <Text fontSize="3xl" fontWeight="bold" marginBottom="4">
          Get the full experience
        </Text>
        <Text fontWeight="normal" fontSize="md">
          Never Miss a Travel Deal Again! Sign In and Track Prices Now.
        </Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FirebaseAuth
          firebaseAuth={auth}
          uiConfig={{
            signInFlow: "popup",
            signInSuccessUrl: "/",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            ],
          }}
        />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default AuthModal;
