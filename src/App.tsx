import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  // states
  const [inputTodo, setInputTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  // adding Todos function
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputTodo) {
      setTodos([...todos, { id: Date.now(), inputTodo, isDone: false }]);
      setInputTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        handleAdd={handleAdd}
      />

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
