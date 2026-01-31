import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login();
    navigate("/dashboard");
  };
  return (
    <>
      <h1>Welcome to the Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
