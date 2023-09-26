export default function List({ tasks, setTasks, filter }) {
  function handleCompleted(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleClearCompleted() {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  }

  function handleDelete(id) {
    setTasks((tasks) => tasks.filter((task) => task.id != id));
  }

  let filteredList;
  if (filter === "all") filteredList = tasks;

  if (filter === "active")
    filteredList = tasks.filter((task) => !task.completed);

  if (filter === "completed")
    filteredList = tasks.filter((task) => task.completed);

  return (
    <div className="list-container">
      <ul>
        {filteredList.length === 0 ? (
          <li>
            <span>Nothing to do today?</span>
          </li>
        ) : (
          filteredList.map((item) => (
            <li key={item.id} draggable>
              <input
                type="checkbox"
                value={item.completed}
                checked={item.completed ? true : false}
                onChange={() => handleCompleted(item.id)}
              />
              <span className={item.completed ? "checked" : null}>
                {item.text}
              </span>
              <button onClick={() => handleDelete(item.id)}>
                <img src="/cross.svg" />
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="stats-container">
        <span>{filteredList.length} items left</span>
        <span className="clear-button" onClick={handleClearCompleted}>
          Clear Completed
        </span>
      </div>
    </div>
  );
}
