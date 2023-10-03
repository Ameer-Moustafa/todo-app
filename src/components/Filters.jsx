// Filter component, state variable will be set depending on which button is selected

export default function Filters({ onFilter, filter }) {
  return (
    <div className="filter-container">
      <span
        onClick={() => onFilter("all")}
        className={filter === "all" ? "active" : null}
      >
        All
      </span>
      <span
        onClick={() => onFilter("active")}
        className={filter === "active" ? "active" : null}
      >
        Active
      </span>
      <span
        onClick={() => onFilter("completed")}
        className={filter === "completed" ? "active" : null}
      >
        Completed
      </span>
    </div>
  );
}
