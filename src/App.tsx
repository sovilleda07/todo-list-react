import AddToForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllTodos,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="bg-space-cadet text-white py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center text-white">Your Todos</h1>
      <div className="max-w-lg mx-auto rounded-md p-5 space-y-6">
        <AddToForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteAll={deleteAllTodos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App;
