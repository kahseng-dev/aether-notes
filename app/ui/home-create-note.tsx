'use client'

import type { Note } from '@/types/Note';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomeCreateNote({ notes }: { notes: Note[] }) {
  const router = useRouter();

  function createNewNote(notes: Note[]) {
    let newNoteId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;

    const newNote: Note = {
      id: newNoteId,
      title: 'New Note',
      lastUpdated: new Date().toISOString(),
      content: '',
      folder: 'Notes',
    };

    notes.concat(newNote);

    router.push(`/editor/${newNote.id}`);
  };

  return (
      <div
        onClick={() => createNewNote(notes)}
        className='p-2 w-min rounded cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
        <Plus className={styles.icon}/>
      </div>
  );
}

const styles = {
    icon: 'size-5 min-w-max',
};