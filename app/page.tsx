import Link from 'next/link';
import SearchButton from '@/app/ui/search-button';
import HomeDirectory from '@/app/ui/home-directory';
import HomeCreateNote from '@/app/ui/home-create-note';
import { Settings } from 'lucide-react';
import { getAllNotes } from '@/lib/notes-data';
import type { Note } from '@/types/Note';

export default function Home() {
  const headerTitle = 'aether-notes';
  const data:Note[] = getAllNotes() || [];

  return (
    <div className='p-10 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <Link
            href='/settings'
            className='p-2 rounded transition duration-300 ease-in-out hover:bg-white/20'>
              <Settings className={styles.icon}/>
          </Link>
          <p>{headerTitle}</p>
          <SearchButton notes={data}/>
        </div>
        <div className='mt-8'>
          <HomeDirectory notes={data}/>
        </div>
        <div className='mt-8 flex justify-between'>
          <div></div>
          <HomeCreateNote notes={data}/>
        </div>
      </main>
    </div>
  );
}

const styles = {
  icon: 'size-5 min-w-max',
};