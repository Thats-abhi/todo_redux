import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center my-2 text-white">TODOS</div>
      <ul className="grid gap-y-4">
        {todos.map((todo) => (
          <li className="text-white bg-black rounded" key={todo.id}>
            <div className="flex justify-between">
              <p className="ml-3">{todo.text}</p>
              <button
                className="pr-2"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
