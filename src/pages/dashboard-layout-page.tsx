import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import { useEffect } from "react";

export const DashboardLayoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    auth.logout();
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
        </Link>
      </nav>

      <button onClick={handleLogout}>Logout</button>

      <Outlet />
    </>
  );
};
