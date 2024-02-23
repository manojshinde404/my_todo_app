import React, { useState } from "react";
import axios from "axios";

function TodoItem({ todo, onDeleteClick, onCompleteClick }) {
  const formattedDate = new Date(todo.todoDate).toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${todo.id}`);
      onDeleteClick(todo.id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCompleteClick = async () => {
    try {
      if (!todo.completed) {
        alert("hi");
        await axios.put(`http://localhost:8080/api/todos/${todo.id}`, {
          completed: 1,
        });
        onCompleteClick(todo.id);
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  return (
    <div className="container">
      <div className="row pb-2">
        <div className="col-5">{todo.todoName}</div>
        <div className="col-3">{formattedDate}</div>
        <div className="col-2">
          {todo.completed ? (
            <button
              type="button"
              className="btn btn-secondary sh-button"
              disabled
            >
              Completed
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary sh-button"
              onClick={handleCompleteClick}
            >
              Complete
            </button>
          )}
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sh-button"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
