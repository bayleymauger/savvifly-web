import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import User from "./pages/User";

const queryClient = new QueryClient();

export const PUBLIC_ROUTES = {
  "/": <Home />,
  "*": <div>No dice soz</div>,
};

export const AUTHENTICATED_ROUTES = {
  ["/dashboard"]: <Dashboard />,
  ["/user"]: <User />,
  ["/settings"]: <div>Settings</div>,
  // ["/flights"]: <Flights />,
  ["/search"]: <div>Search</div>,
  ["/tracked"]: <div>Tracked</div>,
  ["/alerts"]: <div>Alerts</div>,
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {Object.entries(PUBLIC_ROUTES).map(([path, element]) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route path="/" element={<DashboardLayout />}>
            {Object.entries(AUTHENTICATED_ROUTES).map(([path, element]) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
