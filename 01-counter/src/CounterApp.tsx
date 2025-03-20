import { useState } from "react";

export function CounterApp({ value }: { value: number }) {
  const [counter, setCounter] = useState(value);
/*   const handleClick = () => setCounter(counter + 1); */
  const handleClick = (val:number) => val === 0 ? setCounter(value) : setCounter((v)=> v+val);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={()=>handleClick(1)} name='+1'> +1</button>
      <button onClick={()=>handleClick(-1)} name='-1'> -1</button>
      <button onClick={()=>handleClick(0)} name='reset'>Reset</button>
    </>
  );
}
