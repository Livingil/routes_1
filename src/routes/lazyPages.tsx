import { lazy } from "react";

export const HomePage = lazy(() =>
  import("../ui/pages/home-page").then((module) => ({
    default: module.HomePage,
  })),
);

export const LoginPage = lazy(() =>
  import("../ui/pages/login-page").then((module) => ({
    default: module.LoginPage,
  })),
);

export const DashboardLayoutPage = lazy(() =>
  import("../ui/pages/dashboard-layout-page").then((module) => ({
    default: module.DashboardLayoutPage,
  })),
);

export const ProfilePage = lazy(() =>
  import("../ui/pages/profile-page").then((module) => ({
    default: module.ProfilePage,
  })),
);

export const SettingPage = lazy(() =>
  import("../ui/pages/setting-page").then((module) => ({
    default: module.SettingPage,
  })),
);

export const StatsPage = lazy(() =>
  import("../ui/pages/stats-page").then((module) => ({
    default: module.StatsPage,
  })),
);

export const CharactersPage = lazy(() =>
  import("../ui/pages/characters-page").then((module) => ({
    default: module.CharactersPage,
  })),
);

export const LocationsPage = lazy(() =>
  import("../ui/pages/locations-page").then((module) => ({
    default: module.LocationsPage,
  })),
);

export const EpisodesPage = lazy(() =>
  import("../ui/pages/episodes-page").then((module) => ({
    default: module.EpisodesPage,
  })),
);
