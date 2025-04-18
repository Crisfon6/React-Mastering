import { useState } from "react";

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });
    const {counter1} = state;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">CounterApp</h1>
        <h2 className="text-6xl font-bold text-blue-600 mb-6">{counter1}</h2>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <div className="flex gap-4">
          <button 
            onClick={() => setCounter({...state,counter1: counter1 + 1})}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer" 
          >
            +1
          </button>
          <button
            onClick={() => setCounter({...state,counter1: counter1 - 1})} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 cursor-pointer"
          >
            -1
          </button>
          <button
            onClick={() => setCounter({...state,counter1: 0})}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
