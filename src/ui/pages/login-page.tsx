import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { LoginForm } from "../molecules";
import { PageShell } from "../templates";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (values: { email: string; password: string }) => {
    if (values.email && values.password) {
      login(values.email, values.password);
      navigate("/dashboard");
    }
  };

  return (
    <PageShell
      title="Login"
      description="Use any email and password to continue."
    >
      <LoginForm onSubmit={handleSubmit} />
    </PageShell>
  );
};
