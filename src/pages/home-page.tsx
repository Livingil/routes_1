import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
      {" | "}
      <Link to="/login">Go to Login</Link>
    </>
  );
};
