import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/todos";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButton = async () => {
    try {
      const response = await axios.post(API_URL, {
        todoName,
        todoDate,
        completed: false,
      });

      onNewItem(response.data);
      setTodoName("");
      setTodoDate("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div className="row" style={{ margin: "10px", padding: "10px" }}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your Todo here"
                value={todoName}
                onChange={handleNameChange}
              />
            </th>
            <th>
              <input
                type="datetime-local"
                className="form-control"
                value={todoDate}
                onChange={handleDateChange}
              />
            </th>
            <th>
              <button
                type="button"
                className="btn btn-success sh-button"
                onClick={handleAddButton}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default AddTodo;
