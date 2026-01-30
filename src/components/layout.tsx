import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <NavLink to="/characters">Characters</NavLink>
        {" | "}
        <NavLink to="/episodes">Episodes</NavLink>
        {" | "}
        <NavLink to="/locations">Locations</NavLink>
      </div>
      <Outlet />
    </>
  );
};
