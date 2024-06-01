import { User, onAuthStateChanged, signOut as fbSignOut } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../components/AuthModal";
import { useDisclosure } from "@chakra-ui/react";

export type AuthContext = {
  user?: User;
  signOut: () => void;
  modal: ReturnType<typeof useDisclosure>;
};

const AuthContext = createContext<AuthContext>({
  user: undefined,
  signOut: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthContext["user"]>();
  const modal = useDisclosure();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const signOut = useCallback(async () => {
    try {
      await fbSignOut(auth);
      setUser(undefined);
      navigate("/");
      console.log("Signed out successfully");
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, signOut, modal }}>
      {children}
      <AuthModal isOpen={modal.isOpen} onClose={modal.onClose} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
