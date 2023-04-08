import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  inputTodo: string;
  setInputTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  inputTodo,
  setInputTodo,
  handleAdd,
}) => {
  // when click button "Go" color change
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your task..."
        className="input_box"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
