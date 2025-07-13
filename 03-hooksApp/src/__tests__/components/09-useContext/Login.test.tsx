import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../../11-useContext/LoginPage";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { UserContext } from "../../../11-useContext/context/UserContext"; // <-- Import your context

describe("Login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the login form without user", () => {
    const setUser = vi.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    );
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
    expect(screen.queryByTestId("user")).not.toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

});