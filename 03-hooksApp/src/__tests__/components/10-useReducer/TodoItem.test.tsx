import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../10-useReducer/TodoItem";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe('TodoItem', () => {
    const todo = {
        id: 1,
        todo: 'Learn React',
        done: false
    };
    const onDeleteTodo = vi.fn();
    const onToggleTodo = vi.fn();
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it('should render the todo item', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });
    it('should call the onDeleteTodo function when the delete button is clicked', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);
        fireEvent.click(screen.getByTestId('delete-button'));
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
        expect(onDeleteTodo).toHaveBeenCalledTimes(1);
        const span = screen.getByTestId(`todo-item-text-${todo.id}`);
        console.log(span.innerHTML);
      //  expect(span).not.toBeInTheDocument();
    });
  /*  it('should call the onToggleTodo function when the checkbox is clicked', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);
        fireEvent.click(screen.getByTestId('toggle-checkbox'));
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
        expect(onToggleTodo).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId(`todo-item-text-${todo.id}`)).toHaveClass('line-through');
    });*/
});