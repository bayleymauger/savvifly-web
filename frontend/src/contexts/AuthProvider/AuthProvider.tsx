import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User, onAuthStateChanged, signOut as fbSignOut } from "firebase/auth";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { auth } from "../../firebase";
import AuthModal from "../../components/AuthModal";
import FullPageSpinner from "../../components/FullPageSpinner";

export type AuthContext = {
  user?: User;
  loading: boolean;
  signOut: () => void;
  modal: ReturnType<typeof useDisclosure>;
};

const AuthContext = createContext<AuthContext>({
  user: undefined,
  loading: true,
  signOut: () => {},
  modal: {
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
    onToggle: () => {},
    isControlled: false,
    getButtonProps: () => {},
    getDisclosureProps: () => {},
  },
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<AuthContext["user"]>();
  const [loading, setLoading] = useState(true);
  const triggerAuth = searchParams.get("auth") !== null;
  const navigate = useNavigate();
  const location = useLocation();
  const modal = useDisclosure({
    defaultIsOpen: triggerAuth,
  });

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        if (location.pathname === "/") {
          navigate("/dashboard");
        }
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (triggerAuth && !modal.isOpen) {
      modal.onOpen();
      searchParams.delete("auth");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, modal, triggerAuth]);

  const authValue = useMemo(
    () => ({
      user,
      loading,
      modal,
      signOut,
    }),
    [user, loading, signOut, modal]
  );

  return (
    <AuthContext.Provider value={authValue}>
      {loading ? <FullPageSpinner /> : children}
      <AuthModal isOpen={modal.isOpen} onClose={modal.onClose} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
