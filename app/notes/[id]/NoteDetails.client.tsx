"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import css from './NoteDetails.module.css';

const NoteDetailsClient = () => {
	const { id } = useParams<{ id: string }>();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !note) return <p>Some error..</p>;


  return (
    <div className={css.container}>
    <div className={css.item}>
      <div className={css.header}>
        <h2>{note?.title}</h2>
      </div>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
    </div>
  </div>
  );
};

export default NoteDetailsClient;
