import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithHook } from "./01-useState/CounterWithHook"

export const HookApp = () => {
  return (
    <div className="container">
      <h1 className="text-3xl">
    Hello world!
  </h1>
  <CounterApp />
  <CounterWithHook />
    </div>
  )
}