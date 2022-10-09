import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  handleDelete: HandleDelete;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  handleDelete,
}) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
