import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, createdAt, body, onDelete, id }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction onDelete={onDelete} id={id} />
    </div>
  );
}

export default NoteItem;
