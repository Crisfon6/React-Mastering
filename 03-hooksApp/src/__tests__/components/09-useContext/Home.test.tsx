import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage as Home } from "../../../11-useContext/HomePage";
import { UserContext } from "../../../11-useContext/context/UserContext";

    describe("Home",()=>{
    it("should render the component",()=>{
        render(<Home />);        
        expect(screen.getByText("HomePage")).toBeInTheDocument();
    })
    it("should render the user",()=>{
        render(
        <UserContext.Provider value={{user: null, setUser: () => {}}}>
            <Home />
        </UserContext.Provider>);        
        
        expect(screen.queryByTestId("user")).not.toBeInTheDocument();
    })
    it("should render the user",()=>{
        const user = {name:"John Doe",email:"john.doe@example.com",password:"password",isLoggedIn:true};
        render(
        <UserContext.Provider value={{user, setUser: () => {}}}>
            <Home />
        </UserContext.Provider>);                
        expect(screen.getByTestId("user")).toBeInTheDocument();
        expect(screen.getByTestId("user")).toHaveTextContent(user.email);
        expect(screen.getByTestId("user")).toHaveTextContent(user.name);
        expect(screen.getByTestId("user")).toHaveTextContent(user.isLoggedIn.toString());
        expect(screen.getByTestId("user")).toHaveTextContent(user.password);
    })    
})