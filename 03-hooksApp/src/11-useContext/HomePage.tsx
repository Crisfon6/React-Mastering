import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const {user} = useContext(UserContext) as {user: any};
  return (
    <div>
      <h1>HomePage</h1>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};
