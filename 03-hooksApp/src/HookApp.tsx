import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithHook } from "./01-useState/CounterWithHook"
import { SimpleForm } from "./02-useEfect/SimpleForm"
import { FormWithCustomHook } from "./02-useEfect/FormWithCustomHook"
import { ReactHookForm } from "./02-useEfect/ReactHookForm"
import { MultipleCustomHooks } from "./03-customHooks/MultipleCustomHooks"
import { TanQuery } from "./04-externalLibs/TanQuery"
import { FocusScreen } from "./05-useRef/FocusScreen"
import { LayoutPage } from "./06-useLayoutEffect/Layout"
import { Memorize } from "./07-useMemo/Memorize"
import { MemoHook } from "./07-useMemo/MemoHook"
import { CallBackHook } from "./08-useCallBacks/CallBackHook"
import { Padre } from "./09-tarea-memo/Padre"
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
  <FocusScreen />
  <LayoutPage />
  <Memorize />
  <MemoHook />
  <CallBackHook />
  <Padre />
    </div>
  )
}