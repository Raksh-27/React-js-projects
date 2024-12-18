import React, { useState } from 'react';
import './TodoList.css';

const TodoList = (props) => {
  const [editText, setEditText] = useState(props.items); // Track the edited text locally

  const handleEdit = () => {
    if (props.isEditing) {
      props.editItem(props.index, editText); // Save the changes
    } else {
      props.setIsEditing(props.index); // Enter edit mode
    }
  };

  return (
    <li className="List">
      {props.isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input" // Add a class to the input
          placeholder="Edit your task..."
        />
      ) : (
        <span className="task-text">{props.items}</span>
      )}
      <button className="Delete" onClick={() => props.delItems(props.index)}>
        Delete
      </button>
      <button className="Edit" onClick={handleEdit}>
        {props.isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default TodoList;
