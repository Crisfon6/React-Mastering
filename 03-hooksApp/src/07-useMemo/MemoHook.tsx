import { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const heavyProcess = (iteration:number=1000) => {
  for (let i = 0; i < iteration; i++) {
    console.log('heavyProcess');
  }
  return `${iteration} iterations done`;
}
export const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);
  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10 text-center">
          MemoHook
        </h1>
        
       <h3>Counter: {counter}</h3>
        <h4>{memoHeavyProcess}</h4>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
            onClick={() => increment()}
          >
            Increment +1
          </button>
          
          <button
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:scale-95"
            onClick={() => setShow(!show)}
          >
            Show/Hide {JSON.stringify(show)}
          </button>
        </div>
      </div>
    </div>
  );
};
