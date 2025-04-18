import { InputTodo } from "./InputTodo";
import { TodoList } from "./TodoList";
import { useTodo } from "./hooks/useTodo";


export const TodoApp = () => {

  const {todos, onNewTodo, onDeleteTodo, onToggleTodo, todosCount, pendingTodosCount, completedTodosCount} = useTodo();
  return (
    
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">TODO App</h2>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
            Total: {todosCount}
          </span>
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
            Pending: {pendingTodosCount}
          </span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
            Completed: {completedTodosCount}
          </span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
          
      </ul>
      <InputTodo onNewTodo={onNewTodo} />
    </div>
  );
};
