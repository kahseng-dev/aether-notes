import Link from 'next/link';
import HomeDirectory from '@/app/ui/home-directory';
import { Settings, Search } from 'lucide-react';
import { getAllNotes } from '@/lib/notes-data';

export default function Home() {
  const iconSize = 24;
  const headerTitle = 'aether-notes';
  const data = getAllNotes();

  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col'>
        <div className='p-2 flex items-center justify-between'>
          <Link
            href='/settings'
            className='p-2 rounded transition duration-300 ease-in-out hover:bg-white/20'>
              <Settings size={iconSize}/>
          </Link>
          <p>{headerTitle}</p>
          <div
            className='p-2 rounded transition duration-300 ease-in-out hover:bg-white/20'>
              <Search size={iconSize}/>
          </div>
        </div>
        <div className='mt-8'>
          <HomeDirectory notes={data}/>
        </div>
      </main>
    </div>
  );
}