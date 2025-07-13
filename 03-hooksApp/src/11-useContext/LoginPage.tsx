import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>LoginPage</h1>
      {user && <pre data-testid="user">{JSON.stringify(user, null, 2)}</pre>}
      {!user && (
        <button data-testid="login-button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
          onClick={() =>
            setUser({
              name: "John",
              email: "john@example.com",
              password: "123456",
              isLoggedIn: true,
            })
          }
        >
          Sign in
        </button>
      )}
    </div>
  );
};
