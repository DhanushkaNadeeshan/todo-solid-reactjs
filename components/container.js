import { useState } from "react";
import AddTodo from "./addTodo";
import ViewList from "./viewList";

export default function Container() {
  const [todoList, setTodoList] = useState([]);

  const handleList = (newTask) => {
    setTodoList([...todoList, newTask]);
  };

  const deleteATask = (index) => {
    let deleteItem = todoList[index]
    const newList = todoList.filter(data => data !== deleteItem);
    setTodoList([...newList]);
  };

  return (
    <div>
      <AddTodo addTodoList={handleList} />
      <ViewList list={todoList} deleteATask={deleteATask} />
    </div>
  );
}
