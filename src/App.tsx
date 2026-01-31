import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes";

export function App() {
  return <RouterProvider router={AppRoutes} />;
}
