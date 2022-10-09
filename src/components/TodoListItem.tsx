import React, { useRef } from "react";
import { GrClose } from "react-icons/gr";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  handleDelete: HandleDelete;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  handleDelete,
}) => {
  return (
    <li className="todo-li">
      <label className={todo.complete ? "todo-row completed" : "todo-row"}>
        <div className="divider">
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo)}
            checked={todo.complete}
          />
          {todo.text}
        </div>
      </label>
      <div onClick={() => handleDelete(todo)} className="x-close">
        <GrClose />
      </div>
    </li>
  );
};

export default TodoListItem;
