import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ datas, onDelete }) {
  if (datas.length === 0) {
    return <p className="notes-list__empty-message">Catatan Kosong</p>;
  } else {
    return (
      <div className="notes-list">
        {datas.map((data) => (
          <NoteItem key={data.id} {...data} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default NoteList;
