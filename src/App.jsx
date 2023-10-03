import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Filters from "./components/Filters.jsx";

export default function App() {
  // Retrieving data from localStorage or setting as an empty array if no localstorage exists
  const data = JSON.parse(localStorage.getItem("TODO-Data")) || [];
  // State variable to keep track of which filtered array to display
  const [activeFilter, setActiveFilter] = useState("all");
  // Main state variable for our to-do list
  const [list, setList] = useState(data);


  // A useEffect that saves our list state variable to localstorage whenever list is updated.
  useEffect(
    () => localStorage.setItem("TODO-Data", JSON.stringify(list)),
    [list]
  );

  return (
    <>
      <Header />
      <Input tasks={list} onAddItem={setList} />
      <List tasks={list} setTasks={setList} filter={activeFilter} />
      <Filters onFilter={setActiveFilter} filter={activeFilter} />
    </>
  );
}
