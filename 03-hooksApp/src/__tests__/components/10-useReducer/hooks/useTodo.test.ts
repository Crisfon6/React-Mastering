import { act, renderHook } from "@testing-library/react";
import { useTodo } from "../../../../10-useReducer/hooks/useTodo";
import { beforeEach, describe, expect, it } from "vitest";

describe("useTodo", () => {
    beforeEach(()=>{
        localStorage.clear();
    })
    const initialState = [
        { id: 1, todo: "Buy groceries", done: false },
        { id: 2, todo: "Buy groceries", done: false },
        { id: 3, todo: "Buy groceries", done: false },
    ];
    it("should return the initial state", () => {
        const { result } = renderHook(() => useTodo());        
        expect(result.current.todos).toEqual([]);
        expect(result.current.onNewTodo).toBeInstanceOf(Function);
        expect(result.current.onDeleteTodo).toBeInstanceOf(Function);
        expect(result.current.onToggleTodo).toBeInstanceOf(Function);
        expect(result.current.todosCount).toBe(0);
        expect(result.current.pendingTodosCount).toBe(0);
        expect(result.current.completedTodosCount).toBe(0);
    });
    it("initial state from localStorage",()=>{
        localStorage.setItem("todos", JSON.stringify(initialState));
        const { result } = renderHook(() => useTodo());
        expect(result.current.todos).toEqual(initialState);
    })

    it("should add a new todo", () => {
        localStorage.setItem("todos", JSON.stringify(initialState));
        const { result } = renderHook(() => useTodo());
        act(()=>{
            result.current.onNewTodo("Buy new shoes");
        })
        const newTodo = result.current.todos[result.current.todos.length - 1];
        expect(newTodo).toMatchObject({
            todo: "Buy new shoes",
            done: false
        });        
        expect(typeof newTodo.id).toBe('number');
        expect(result.current.todos.length).toBe(initialState.length + 1);
    });
    it("should delete a todo",()=>{
        localStorage.setItem("todos", JSON.stringify(initialState));
        const { result } = renderHook(() => useTodo());
        const todoToDelete = result.current.todos[0];
        act(()=>{
            result.current.onDeleteTodo(todoToDelete.id);
        })
        expect(result.current.todos).not.toContain(todoToDelete);
    })
    it("should toggle a todo",()=>{
        localStorage.setItem("todos", JSON.stringify(initialState));
        const { result } = renderHook(() => useTodo());
        const todoToToggle = result.current.todos[0];
        act(()=>{
            result.current.onToggleTodo(todoToToggle.id);
        })
        expect(result.current.todos[0].done).toBe(true);
        act(()=>{
            result.current.onToggleTodo(todoToToggle.id);
        })
        expect(result.current.todos[0].done).toBe(false);
    })
});

        