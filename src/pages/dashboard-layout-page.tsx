import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const DashboardLayoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <h1>Welcome to the Dashboard Layout Page</h1>

      <nav>
        <Link
          to="/dashboard/profile"
          style={{
            fontWeight: isActive("/dashboard/profile") ? "bold" : "normal",
          }}
        >
          Profile
        </Link>{" "}
        |
        <Link
          to="/dashboard/settings"
          style={{
            fontWeight: isActive("/dashboard/settings") ? "bold" : "normal",
          }}
        >
          Settings
        </Link>{" "}
        |
        <Link
          to="/dashboard/stats"
          style={{
            fontWeight: isActive("/dashboard/stats") ? "bold" : "normal",
          }}
        >
          Stats
        </Link>{" "}
        |
        <Link
          to="/dashboard/characters"
          style={{
            fontWeight: isActive("/dashboard/characters") ? "bold" : "normal",
          }}
        >
          Characters
        </Link>{" "}
        |
        <Link
          to="/dashboard/locations"
          style={{
            fontWeight: isActive("/dashboard/locations") ? "bold" : "normal",
          }}
        >
          Locations
        </Link>{" "}
        |
        <Link
          to="/dashboard/episodes"
          style={{
            fontWeight: isActive("/dashboard/episodes") ? "bold" : "normal",
          }}
        >
          Episodes
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <Outlet />
    </>
  );
};
