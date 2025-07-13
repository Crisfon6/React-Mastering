import { MainApp } from "../../../11-useContext/MainApp";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("MainApp Component", () => {
  it("should render the MainApp component", () => {
    render(<MainApp />);
    expect(screen.getByText("MainApp")).toBeInTheDocument();    
  });

  it("should navigate to LoginPage when clicking Login link", () => {
    render(<MainApp />);
    
    // Find and click the Login link in the navigation
    const loginLink = screen.getByText("Login");
    fireEvent.click(loginLink);
    
    // Verify we're on the LoginPage
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

  it("should navigate to different pages via navigation links", () => {
    render(<MainApp />);
    
    // Test Home navigation
    const homeLink = screen.getByText("Home");
    fireEvent.click(homeLink);
    expect(screen.getByText("HomePage")).toBeInTheDocument();
    
    // Test About navigation
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    expect(screen.getByText("AboutPage")).toBeInTheDocument();
    
    // Test Login navigation
    const loginLink = screen.getByText("Login");
    fireEvent.click(loginLink);
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
  });
});
