import { useState } from "react";

interface AddToFormProps {
  onSubmit: (title: string) => void;
}

export default function AddToForm({ onSubmit }: AddToFormProps) {
  const [input, setIntput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setIntput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setIntput(e.target.value)}
        placeholder="What needs to be done"
        className="rounded-s-md grow border bg-white p-2 text-gray-800"
        type="text"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-cyclamen border-cyclamen text-white font-semibold hover:bg-violet-red"
      >
        Add
      </button>
    </form>
  );
}
