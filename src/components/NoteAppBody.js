import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ datas, onDelete, addNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Yang Sudah Dibuat</h2>
      <NoteList datas={datas} onDelete={onDelete} />
      <h2>Arsip</h2>
      <p className="notes-list__empty-message">Catatan Kosong</p>
    </div>
  );
}

export default NoteAppBody;
