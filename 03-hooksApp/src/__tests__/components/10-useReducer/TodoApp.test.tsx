import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../10-useReducer/TodoApp";
import { useTodo } from "../../../10-useReducer/hooks/useTodo";


// Mock the useTodo hook
vi.mock("../../../10-useReducer/hooks/useTodo");

describe("TodoApp", () => {
    beforeEach(() => {
        vi.mocked(useTodo).mockClear();
    });

    it("should render the todo app with initial state", () => {
        // Setup mock return value
        vi.mocked(useTodo).mockReturnValue({
            todos: [],
            onNewTodo: vi.fn(),
            onDeleteTodo: vi.fn(),
            onToggleTodo: vi.fn(),
            todosCount: 0,
            pendingTodosCount: 0,
            completedTodosCount: 0
        });

        render(<TodoApp />);
        
        expect(screen.getByText("TODO App")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
        expect(screen.getByText("Total: 0")).toBeInTheDocument();
        expect(screen.getByText("Pending: 0")).toBeInTheDocument();
        expect(screen.getByText("Completed: 0")).toBeInTheDocument();
    });

    it('should display the list of todos', () => {
        const todos = [
            { id: 1, todo: "Buy groceries", done: false },
            { id: 2, todo: "Walk the dog", done: true },
            { id: 3, todo: "Do laundry", done: false },
        ];

        // Setup mock return value with test data
        vi.mocked(useTodo).mockReturnValue({
            todos,
            onNewTodo: vi.fn(),
            onDeleteTodo: vi.fn(),
            onToggleTodo: vi.fn(),
            todosCount: todos.length,
            pendingTodosCount: todos.filter(todo => !todo.done).length,
            completedTodosCount: todos.filter(todo => todo.done).length,
        });

        render(<TodoApp />);
        
        // Verify the todos are displayed
        todos.forEach(todo => {
            expect(screen.getByText(todo.todo)).toBeInTheDocument();
        });
        
        // Verify the counters
        expect(screen.getByText(`Total: ${todos.length}`)).toBeInTheDocument();
        expect(screen.getByText(`Pending: ${todos.filter(t => !t.done).length}`)).toBeInTheDocument();
        expect(screen.getByText(`Completed: ${todos.filter(t => t.done).length}`)).toBeInTheDocument();
    });
});