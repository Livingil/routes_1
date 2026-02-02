import { useAuth } from "../context";

export const ProfilePage = () => {
  const { email } = useAuth();

  return (
    <>
      <h1>Welcome to the Profile Page</h1>
      <p>Email: {email}</p>
    </>
  );
};
