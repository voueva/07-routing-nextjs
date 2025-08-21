import { fetchNotes, NoteListResponse, Tag } from "../../../../lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const initialTag = slug[0] === 'All' ? null : slug[0] as Tag;
  const initialQuery = '';
  const initialPage = 1;
  const initialData: NoteListResponse = await fetchNotes(initialQuery, initialPage, initialTag);

  return (
    <NotesClient
      initialData={initialData}
      initialQuery={initialQuery}
      initialPage={initialPage}
      initialTag={initialTag}
    />
  );
}
