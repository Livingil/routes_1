import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={AppRoutes} />
    </AuthProvider>
  );
}
