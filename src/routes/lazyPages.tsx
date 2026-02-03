import { lazy } from "react";

export const HomePage = lazy(() =>
  import("../pages/home-page").then((module) => ({ default: module.HomePage })),
);

export const LoginPage = lazy(() =>
  import("../pages/login-page").then((module) => ({
    default: module.LoginPage,
  })),
);

export const DashboardLayoutPage = lazy(() =>
  import("../pages/dashboard-layout-page").then((module) => ({
    default: module.DashboardLayoutPage,
  })),
);

export const ProfilePage = lazy(() =>
  import("../pages/profile-page").then((module) => ({
    default: module.ProfilePage,
  })),
);

export const SettingPage = lazy(() =>
  import("../pages/setting-page").then((module) => ({
    default: module.SettingPage,
  })),
);

export const StatsPage = lazy(() =>
  import("../pages/stats-page").then((module) => ({
    default: module.StatsPage,
  })),
);

export const CharactersPage = lazy(() =>
  import("../pages/characters-page").then((module) => ({
    default: module.CharactersPage,
  })),
);

export const LocationsPage = lazy(() =>
  import("../pages/locations-page").then((module) => ({
    default: module.LocationsPage,
  })),
);

export const EpisodesPage = lazy(() =>
  import("../pages/episodes-page").then((module) => ({
    default: module.EpisodesPage,
  })),
);
