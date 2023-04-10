import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  // states
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  // adding Todos function
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField
        inputTodo={todo}
        setInputTodo={setTodo}
        handleAdd={handleAdd}
      />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
