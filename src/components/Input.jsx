import { useState } from "react";
export default function Input({ tasks, onAddItem }) {
  // State to control our input component
  const [input, setInput] = useState("");

  // Function to be ran on form submission
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), text: input, completed: false };
    onAddItem([...tasks, newTask]);
    setInput("");
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
