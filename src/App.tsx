import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    console.log("test");

    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !selectedTodo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete: HandleDelete = (selectedTodo) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo !== selectedTodo));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
