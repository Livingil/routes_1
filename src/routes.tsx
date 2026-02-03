import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { statsLoader } from "./utils";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";
import {
  HomePage,
  LoginPage,
  DashboardLayoutPage,
  ProfilePage,
  SettingPage,
  StatsPage,
  CharactersPage,
  LocationsPage,
  EpisodesPage,
} from "./routes/lazyPages";

const LoadingFallback = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
);

const withSuspense = (
  Component: React.LazyExoticComponent<() => React.ReactElement>,
) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={withSuspense(HomePage)} />
      <Route path="/login" element={withSuspense(LoginPage)} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>{withSuspense(DashboardLayoutPage)}</ProtectedRoute>
        }
      >
        <Route path="profile" element={withSuspense(ProfilePage)} />
        <Route path="settings" element={withSuspense(SettingPage)} />
        <Route
          path="stats"
          element={withSuspense(StatsPage)}
          loader={statsLoader}
        />
        <Route path="characters" element={withSuspense(CharactersPage)} />
        <Route path="locations" element={withSuspense(LocationsPage)} />
        <Route path="episodes" element={withSuspense(EpisodesPage)} />
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </>,
  ),
);
