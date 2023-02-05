import React, { useRef } from "react";

const AddTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(inputRef.current?.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          <input ref={inputRef} type="text" id="add-todo" />
        </label>
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
