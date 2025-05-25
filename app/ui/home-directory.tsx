'use client'

import Link from "next/link";
import type { Note } from "@/types/Note";
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from "react";

export default function HomeDirectory({ notes }: { notes: Note[] }) {

  const [foldersOpened, setFoldersOpened] = useState<string[]>([])
  const folders: string[] = Array.from(new Set(notes.map(note => note.folder)));

  let folderContentCount = 1;

  function setShowFolderNotes(folderName: string) {
    if (!foldersOpened.includes(folderName)) {
      return setFoldersOpened(folders => [...folders, folderName]);
    } 

    return setFoldersOpened(folders => folders.filter(folder => folder !== folderName));
  }

  return (
      folders.map(folder =>
        <div key={folder}>
          <div
            onClick={() => setShowFolderNotes(folder)}
            className="p-4 flex items-center justify-between cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20">
            <p className="font-bold">{folder}</p>
            <div className="flex items-center gap-2">
              <p className="text-zinc-300">{folderContentCount}</p>
              { !foldersOpened.includes(folder) ? <ChevronDown/> : <ChevronRight/> }
            </div>
          </div>
          { !foldersOpened.includes(folder) ? (
              <div>
                {
                  notes
                    .filter(item => item.folder === folder)
                    .map(item => 
                    <div key={item.id}>
                      <Link
                        href={`/editor/${item.id}`}
                        className="p-4 flex items-center justify-between cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20">
                        <div>
                          <p><strong>{item.title}</strong></p>
                          <div className="flex gap-2">
                            <p><strong>{item.lastUpdated}</strong></p>
                            <p className="text-zinc-300 line-clamp-1">{item.content}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              </div>
            ) : null
          }
        </div>
      )
  );
}