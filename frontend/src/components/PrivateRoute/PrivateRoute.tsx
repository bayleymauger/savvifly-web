import { ReactNode } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/?auth" />;
};

export default PrivateRoute;
