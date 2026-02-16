import { Group } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import { AppButton } from "../atoms";

const links = [
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/settings", label: "Settings" },
  { to: "/dashboard/stats", label: "Stats" },
  { to: "/dashboard/characters", label: "Characters" },
  { to: "/dashboard/locations", label: "Locations" },
  { to: "/dashboard/episodes", label: "Episodes" },
];

interface DashboardNavProps {
  onLogout: () => void;
}

export const DashboardNav = ({ onLogout }: DashboardNavProps) => {
  const location = useLocation();

  return (
    <Group gap="xs" wrap="wrap">
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        return (
          <AppButton
            key={link.to}
            component={NavLink}
            to={link.to}
            variant={isActive ? "filled" : "light"}
            size="sm"
          >
            {link.label}
          </AppButton>
        );
      })}
      <AppButton variant="subtle" color="gray" onClick={onLogout} size="sm">
        Logout
      </AppButton>
    </Group>
  );
};
