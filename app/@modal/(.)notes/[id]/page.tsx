// app/@modal/(.)notes/[id]/page.tsx

import Modal from '@/components/Modal/Modal';
import { getSingleNote } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <NotePreviewClient note={note} />
    </Modal>
  );
};

export default NotePreview;



