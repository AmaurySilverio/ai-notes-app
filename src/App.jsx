import { useState, useEffect } from "react";
import Button from "./components/Button";
import Note from "./components/Note";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:2121");
      const data = await res.json();
      console.log(data);
      setItems(data.notes);
    };
    fetchData();
  }, []);

  // const [notes, setNotes] = useState([
  //   {
  //     id: 1,
  //     content: "HTML is easy",
  //     important: true,
  //   },
  //   {
  //     id: 2,
  //     content: "Browser can execute only JavaScript",
  //     important: false,
  //   },
  //   {
  //     id: 3,
  //     content: "GET and POST are the most important methods of HTTP protocol",
  //     important: true,
  //   },
  // ]);
  // const [newNote, setNewNote] = useState("a new note...");
  // const [showAll, setShowAll] = useState(true);

  // const addNote = (event) => {
  //   event.preventDefault();
  //   const noteObject = {
  //     content: newNote,
  //     important: Math.random() < 0.5,
  //     id: notes.length + 1,
  //   };

  //   setNotes(notes.concat(noteObject));
  //   setNewNote("");
  // };
  // const handleNoteChange = (event) => {
  //   console.log(event.target.value);
  //   setNewNote(event.target.value);
  // };
  // const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      {items.map((i) => (
        <p>
          {i.name},{i.description}
        </p>
      ))}
      {/* <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <Button type="submit" text="save" />
      </form> */}
    </>
  );
}

export default App;
