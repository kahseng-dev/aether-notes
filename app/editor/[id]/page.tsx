import Head from 'next/head';
import Link from "next/link";
import EditorOptions from '@/app/ui/editor-options';
import EditorMarkdown from '@/app/ui/editor-markdown';
import { ChevronLeft } from 'lucide-react';
import { getNote } from '@/lib/notes-data';

export default async function Editor({
  params,
}: {
  params: Promise<{id: number}>
}) {
  const { id } = await params;
  const note = getNote(id);
  
  return (
    <div className='flex flex-col h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='pt-10 px-10 flex flex-col'>
        <div className='flex justify-between'>
          <Link
            href='/'
            className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
            <ChevronLeft className={styles.icon}/>
          </Link>
          <EditorOptions note={note}/>
        </div>
        <div className='pt-4 flex items-center justify-between'>
          <p className='text-xl'>{note.title}</p>
        </div>
      </main>
      <div className='pt-4'>
        <EditorMarkdown note={note}/>
      </div>
    </div>
  );
}

const styles = {
  icon: 'size-5 min-w-max',
};