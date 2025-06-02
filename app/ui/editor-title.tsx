'use client'

import { useState } from 'react';
import { SquarePen } from 'lucide-react';
import type { Note } from '@/types/Note';

export default function EditorMarkdown({ note }: { note: Note }) {
    const [title, setTitle] = useState(note.title || 'Untitled Note');

    return (
        <>
            <span 
                spellCheck={true}
                contentEditable
                suppressContentEditableWarning={true}
                className='group text-xl flex gap-2 items-center outline-none rounded px-2 transition duration-300 ease-in-out cursor-pointer hover:bg-white/20'>
                {title}
                <SquarePen className='opacity-0 group-hover:opacity-100 size-4 transition duration-300 ease-in-out' />
          </span>
        </>
    );
}