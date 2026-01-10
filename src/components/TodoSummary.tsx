import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAll: () => void;
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAll,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>

      <div className="flex items-center justify-center gap-8">
        {todos.length > 0 && (
          <button
            onClick={deleteAll}
            className="text-violet-red hover:underline text-sm font-medium"
          >
            Delete all
          </button>
        )}
        {completedTodos.length > 0 && (
          <button
            onClick={deleteAllCompleted}
            className="text-violet-red hover:underline text-sm font-medium"
          >
            Delete all completed
          </button>
        )}
      </div>
    </div>
  );
}
