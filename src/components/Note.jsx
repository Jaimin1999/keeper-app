import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ConfirmDialog from "../common-components/confirmDialog";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content,
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleEditSubmit() {
    props.onUpdate(props.id, editedNote); // Update the note in the parent
    setIsEditing(false);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <ConfirmDialog
        onOpen={isConfirmModalOpen}
        yesAction={handleClick}
        onClose={() => setIsConfirmModalOpen(false)}
        title={"Are you sure ?"}
        text={"By clicking on yes, it will permanently delete your note."}
      />
      {isEditing ? (
        <div>
          <input
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            placeholder="Edit title"
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            placeholder="Edit content"
            rows="3"
          />
          <div className="edit-buttons">
            <button onClick={handleEditSubmit} className="save-button">
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={() => setIsEditing(true)}>
            <EditIcon />
          </button>
          <button onClick={() => setIsConfirmModalOpen(true)}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
