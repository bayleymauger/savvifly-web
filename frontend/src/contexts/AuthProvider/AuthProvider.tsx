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

export type AuthContext = {
  user?: User;
  signOut: () => void;
};

const AuthContext = createContext<AuthContext>({
  user: undefined,
  signOut: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthContext["user"]>();

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
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
