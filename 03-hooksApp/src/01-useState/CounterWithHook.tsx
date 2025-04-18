import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const {counter, increment, decrement, reset} = useCounter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">CounterWithHook</h1>
      <h2 className="text-6xl font-bold text-blue-600 mb-6">{counter}</h2>
      <hr className="border-t-2 border-gray-200 mb-6" />
      <div className="flex gap-4">
      <button
        onClick={() => increment(1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
      >
        +1
      </button>
      <button
        onClick={() => decrement(1)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 cursor-pointer"
      >
        -1
      </button>
      <button
        onClick={() => reset()}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer"
      >
        Reset
      </button>
      </div>
    </div>
  );
};
