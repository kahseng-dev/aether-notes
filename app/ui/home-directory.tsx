'use client'

import Link from 'next/link';
import type { Note } from '@/types/Note';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function HomeDirectory({ notes }: { notes: Note[] }) {

  const [foldersOpened, setFoldersOpened] = useState<string[]>([]);
  const folders: string[] = Array.from(new Set(notes.map(note => note.folder)));

  function getFolderContentCount(folderName: string) {
    return notes.filter(note => note.folder === folderName).length;
  }

  function setOpenedFolderContents(folderName: string) {
    if (!foldersOpened.includes(folderName)) {
      return setFoldersOpened(folders => [...folders, folderName]);
    }

    return setFoldersOpened(folders => folders.filter(folder => folder !== folderName));
  }

  if (notes.length === 0) {
    return (
      <div className='flex flex-col gap-2'>
        <p className='text-center'>No notes found</p>
      </div>
    );
  }

  return (
      <div className='flex flex-col gap-2'>
        { folders.map(folder =>
          <div key={folder}>
            <div
              onClick={() => setOpenedFolderContents(folder)}
              className='p-4 flex items-center justify-between cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
              <p className='font-bold'>{folder}</p>
              <div className='flex items-center gap-2'>
                <p className='text-zinc-300'>{getFolderContentCount(folder)}</p>
                { !foldersOpened.includes(folder) ? <ChevronRight className={styles.icon}/> : <ChevronDown className={styles.icon}/>}
              </div>
            </div>
            { foldersOpened.includes(folder) ? (
                <div className='pt-2 pl-4 flex flex-col gap-2'>
                  {
                    notes
                      .filter(item => item.folder === folder)
                      .map(item => 
                      <div key={item.id}>
                        <Link
                          href={`/editor/${item.id}`}
                          className='p-4 flex items-center justify-between cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
                          <div>
                            <p><strong>{item.title}</strong></p>
                            <div className='flex gap-2'>
                              <p><strong>{item.lastUpdated}</strong></p>
                              <p className='text-zinc-300 line-clamp-1'>{item.content.join(' ')}</p>
                            </div>
                          </div>
                          <ChevronRight className={styles.icon}/>
                        </Link>
                      </div>
                    )
                  }
                </div>
              ) : null
            }
          </div>
        )}
      </div>
  );
}

const styles = {
    icon: 'size-5 min-w-max',
};