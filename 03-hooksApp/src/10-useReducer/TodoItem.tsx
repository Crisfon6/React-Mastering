import { Todo } from "../interfaces";

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}: {todo: Todo, onDeleteTodo: (id: number) => void, onToggleTodo: (id: number) => void}) => {
  return (
    <li
    key={todo.id}
    className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
  >
    <input 
      type="checkbox" 
      checked={todo.done} 
      onChange={() => onToggleTodo(todo.id)}
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
    />
    <span className={`text-gray-700 ${(todo.done) ? 'line-through' : ''}`}>{todo.todo}</span>
    <button
      onClick={() => onDeleteTodo(todo.id)}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  </li>
  );
};

