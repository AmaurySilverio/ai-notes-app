import { useState, useEffect } from "react";
import Button from "./components/Button";
import Note from "./components/Note";
import axios from "axios";
import noteService from "./services/notes";

function App() {
  // const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:2121");
  //     const data = await res.json();
  //     console.log(data);
  //     setNotes(data.notes);
  //   };
  //   fetchData();
  // }, []);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    });
    // .catch(error => {
    //   alert(
    //     `the note '${note.content}' was already deleted from server`
    //   )
    //   setNotes(notes.filter(n => n.id !== id))
    // })
  };
  return (
    <>
      {/* {items.map((i) => (
        <p>{i.description}</p>
      ))} */}
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <Button type="submit" text="save" />
      </form>
    </>
  );
}

export default App;
