import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { ChevronLeft, Ellipsis } from 'lucide-react';
import { getNote } from '@/lib/notes-data';

export default async function Editor({
  params,
}: {
  params: Promise<{id: number}>
}) {
  const { id } = await params;
  const note = getNote(id);
  const iconSize = 24;
  const headerTitle = note.title;
  const wordCount = note.content.join().length;
  
  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col'>
        <div className='p-2 flex justify-between'>
          <Link
            href='/'
            className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
            <ChevronLeft size={iconSize}/>
          </Link>
          <button
            className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
            <Ellipsis size={iconSize}/>
          </button>
        </div>
        <div className='p-4 flex items-center justify-between'>
          <p className='text-xl'>{headerTitle}</p>
          <p className='text-zinc-500'>{wordCount}</p>
        </div>
        <div className='px-4 flex flex-col'>
          <div className='flex flex-col'>
            {
              note.content.map((line, index) =>
                <p key={index}>{line}</p>
              )
            }
          </div>
        </div>
      </main>
    </div>
  );
}