import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithHook } from "./01-useState/CounterWithHook"
import { SimpleForm } from "./02-useEfect/SimpleForm"
import { FormWithCustomHook } from "./02-useEfect/FormWithCustomHook"
import { ReactHookForm } from "./02-useEfect/ReactHookForm"
import { MultipleCustomHooks } from "./03-customHooks/MultipleCustomHooks"
import { TanQuery } from "./04-externalLibs/TanQuery"
export const HookApp = () => {
  return (
    <div className="container">
      <h1 className="text-3xl">
    Hello world!
  </h1>
  <CounterApp />
  <CounterWithHook />
  <SimpleForm />
  <FormWithCustomHook />
  <ReactHookForm />
  <MultipleCustomHooks />
  <TanQuery />
    </div>
  )
}