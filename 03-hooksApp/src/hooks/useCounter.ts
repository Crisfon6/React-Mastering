import { useState } from "react";

export const useCounter = (initialState: number=10) => {
    const [counter, setCounter] = useState(initialState);
    return {
        counter,
        increment: (factor: number = 1) => setCounter(counter + factor),
        decrement: (factor: number = 1) => setCounter(counter - factor),
        reset: () => setCounter(initialState)
    }
}
