import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  DashboardLayoutPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SettingPage,
  StatsPage,
} from "./pages";
import { statsLoader } from "./utils";

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayoutPage />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="stats" element={<StatsPage />} loader={statsLoader} />
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </>,
  ),
);
