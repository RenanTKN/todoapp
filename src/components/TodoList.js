import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = () => {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const todos = useSelector((state) =>
    getTodosByVisibilityFilter(state, visibilityFilter)
  );
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
