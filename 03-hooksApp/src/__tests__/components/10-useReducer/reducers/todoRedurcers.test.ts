import { describe, expect, it } from "vitest";
import { todoReducer } from "../../../../10-useReducer/reducers/todoReducer";
import { Todo } from "../../../../interfaces";

describe('todoReducer', () => {
    const initialState: Todo[] = [
        {
            id: 1,
            todo: 'Learn React',
            done: false
        },
        {
            id: 2,
            todo: 'Learn Aws',
            done: true
        }
    ];
    it('should return the initial state', () => {
        const action = { type: 'INITIAL_STATE' };
        const newState = todoReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
    it('should add a todo', () => {
        const action = { type: 'add', payload: { id: 3, todo: 'Learn Next', done: false } };
        const newState = todoReducer(initialState, action);
        expect(newState).toEqual([...initialState, action.payload]);
    });
    it('should delete a todo', () => {
        const action = { type: 'delete', payload: 1 };
        const newState = todoReducer(initialState, action);
        expect(newState).toEqual(initialState.filter((todo) => todo.id !== action.payload));
    });   
    it('should toggle a todo', () => {
        const action = { type: 'toggle', payload: 1 };
        const newState = todoReducer(initialState, action);
        expect(newState).toEqual(initialState.map((todo) => todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    });
});