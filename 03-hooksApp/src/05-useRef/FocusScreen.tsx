import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);
  const click = ()=>{
    inputRef.current!.select();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Focus Screen</h1>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Enter your name" 
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 mt-4" onClick={ () => click() }>Focus</button>
    </div>
  );
};
