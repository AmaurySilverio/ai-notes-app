const Note = ({ note, toggleImportance, deleteNote, spellCheck }) => {
  const label = note.important ? "make not important" : "make important";
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={deleteNote}>delete</button>
      <button onClick={spellCheck}>spell check</button>
    </li>
  );
};

export default Note;
