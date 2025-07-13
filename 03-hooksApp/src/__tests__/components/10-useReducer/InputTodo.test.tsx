import { render, screen } from "@testing-library/react";
import { InputTodo } from "../../../10-useReducer/InputTodo";
import { describe, expect, it } from "vitest";

describe("InputTodo",()=>{
    it("should render the input todo",()=>{
        render(<InputTodo onNewTodo={()=>{}} />);        
        expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    })
})