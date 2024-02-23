import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  // inline style example
  const inLineStyle = { textAlign: "left" };

  return (
    <div style={inLineStyle}>
      {todoItems.map((item) => (
        <TodoItem key={item.id} todo={item} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
}

export default TodoItems;
