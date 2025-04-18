import { Todo } from "../interfaces";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos , onDeleteTodo, onToggleTodo }: { todos: Todo[], onDeleteTodo: (id: number) => void, onToggleTodo: (id: number) => void }) => {
  return (
    <>
      {todos.map((todo: Todo) => (
       <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </>
  );
};
