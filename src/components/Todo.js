import React from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <span
        className="todo-delete"
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        &times;
      </span>
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
        onClick={() => {
          dispatch(toggleTodo(todo.id));
        }}
      >
        {todo && todo.completed ? "👌" : "👋"} {todo.content}
      </span>
    </li>
  );
};

export default Todo;
