import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });

    // Clear error if the user starts typing in the title
    if (name === "title" && value.trim()) {
      setError("");
    }
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent page reload

    // Validate title
    if (note.title.trim() === "") {
      setError("Title cannot be empty.");
      return;
    }

    // If validation passes, proceed with adding the note
    props.onAdd(note);

    // Reset the note fields
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/* Show error message if validation fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
