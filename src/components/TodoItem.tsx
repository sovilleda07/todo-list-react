import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label
        className={`flex items-center gap-2 border rounded-md p-2 grow font-normal
        ${
          todo.completed
            ? "bg-violet-red border-violet-red"
            : "bg-white border-white"
        }  `}
      >
        <input
          type="checkbox"
          className="scale-125 accent-space-cadet"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span
          className={
            todo.completed ? "line-through text-white" : "text-space-cadet"
          }
        >
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-1">
        <Trash2 size={22} className="text-white" />
      </button>
    </div>
  );
}
