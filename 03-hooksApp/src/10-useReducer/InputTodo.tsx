import { useState } from "react";

export const InputTodo = ({onNewTodo}:{onNewTodo: (todo: string) => void}) => {
 const [inputValue, setInputValue] = useState("");
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(inputValue.trim().length === 0) return;
    console.log(inputValue);
    onNewTodo(inputValue.trim());
    setInputValue("");
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        placeholder="Add a new todo"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      />
      <button 
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add New Todo
      </button>
      </form>
    </div>
  );
};

