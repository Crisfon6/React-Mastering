import { describe, expect, it } from "vitest";
import { TodoList } from "../../../10-useReducer/TodoList";
import { render, screen } from "@testing-library/react";

describe("TodoList",()=>{
    it("should render the list of todos", async () => {
        const todos = [
            { id: 1, todo: "Buy groceries", done: false },
            { id: 2, todo: "Buy groceries", done: false },
        ]
        render(<TodoList todos={todos} onDeleteTodo={()=>{}} onToggleTodo={()=>{}} />);
        const todoItems =await screen.findAllByTestId(/^todo-item-\d+$/);
        expect(todoItems).toHaveLength(2);
        todoItems.forEach((item, index) => {
            expect(item).toHaveAttribute('data-testid', `todo-item-${todos[index].id}`);
            expect(item).toHaveTextContent(todos[index].todo);
        });
     
    })
})