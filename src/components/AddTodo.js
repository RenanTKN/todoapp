import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const removeExtraSpace = (string) => {
    return string.replace(/\s+/g, " ").trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault(null);

    const todo = removeExtraSpace(input);

    if (todo) {
      // dispatches actions to add todo
      dispatch(addTodo(todo));

      // sets state back to empty string
      setInput("");
    }
    // set the focus to the input
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          ref={inputRef}
          autoFocus
        />
        <button className="add-todo" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
