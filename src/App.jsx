import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Filters from "./components/Filters.jsx";
export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [list, setList] = useState([]);

  return (
    <>
      <Header />
      <Input tasks={list} onAddItem={setList} />
      <List tasks={list} setTasks={setList} filter={activeFilter} />
      <Filters onFilter={setActiveFilter} filter={activeFilter} />
    </>
  );
}
