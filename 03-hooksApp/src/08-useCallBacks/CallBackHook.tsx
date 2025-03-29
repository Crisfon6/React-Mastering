import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
export const CallBackHook = () => {
    const [counter, setCounter] = useState(0);
   
   const incrementFunction = useCallback(
     (val:number=1) => {
       setCounter(prevCounter => prevCounter + val);
     },
     [], // Empty dependency array since we use functional update
   );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">CallBackHook</h1>
        <h2 className="text-2xl mb-4">Counter: {counter}</h2>
        <ShowIncrement increment={incrementFunction}/>
      </div>
    </div>
  );
}
