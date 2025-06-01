import Head from 'next/head';
import Link from "next/link";
import EditorOptions from '@/app/ui/editor-options';
import EditorNotes from '@/app/ui/editor-core';
import { ChevronLeft } from 'lucide-react';
import { getNote } from '@/lib/notes-data';

export default async function Editor({
  params,
}: {
  params: Promise<{id: number}>
}) {
  const { id } = await params;
  const note = getNote(id);
  const headerTitle = note.title;
  const wordCount = note.content.join().length;
  
  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col'>
        <div className='p-2 flex justify-between'>
          <Link
            href='/'
            className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
            <ChevronLeft className={styles.icon}/>
          </Link>
          <EditorOptions note={note}/>
        </div>
        <div className='p-4 flex items-center justify-between'>
          <p className='text-xl'>{headerTitle}</p>
          <p className='text-zinc-500'>{wordCount}</p>
        </div>
        <div className='border px-4 flex flex-col cursor-pointer'>
          <EditorNotes note={note} />
        </div>
      </main>
    </div>
  );
}

const styles = {
  icon: 'size-5 min-w-max',
};