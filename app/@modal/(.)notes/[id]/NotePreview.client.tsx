"use client";


import { Note } from "@/types/note";

interface NotePreviewClientProps { note: Note; }

const NotePreviewClient = ({ note }: NotePreviewClientProps) => {
	
  return (
      <>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
    </>
  );
};

export default NotePreviewClient;