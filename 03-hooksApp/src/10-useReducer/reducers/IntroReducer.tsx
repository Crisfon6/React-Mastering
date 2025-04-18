const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todosReducer = (
  state: any = initialState,
  action: { type: string; payload: any } = { type: "", payload: {} }
) => {
  if (action.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

const todos = todosReducer();
console.log({ todos });
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};
const addTodoAction = {
  type: "add",
  payload: newTodo,
};
const newTodos = todosReducer(todos, addTodoAction);

console.log({ newTodos });
