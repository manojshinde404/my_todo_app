import React, { useState, useEffect } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import axios from "axios";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/todos");
        setTodoItems(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleNewItem = (newTodo) => {
    alert(`New Item Added: ${newTodo.todoName} Date: ${newTodo.todoDate}`);
    const newTodoItems = [...todoItems, newTodo];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemId);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <AppName />
      <div>
        <AddTodo onNewItem={handleNewItem} />{" "}
        {/* Pass handleNewItem as a prop */}
      </div>
      <div>
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
