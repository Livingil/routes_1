import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { DashboardTemplate } from "../templates";

export const DashboardLayoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <DashboardTemplate onLogout={handleLogout}>
      <Outlet />
    </DashboardTemplate>
  );
};
