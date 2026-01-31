import { useLoaderData } from "react-router-dom";

export const StatsPage = () => {
  const user = useLoaderData();
  return (
    <>
      <h1>Welcome to the Stats Page</h1>
      <div>
        <h2>Stats</h2>
        <p>User: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
};
