'use client'

import Link from 'next/link';
import type { Note } from '@/types/Note';
import { useState } from 'react';
import { Search, FileText } from 'lucide-react';

export default function SearchButton({ notes }: { notes: Note[] }) {
    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
    const [searchResult, setSearchResult] = useState<Note[]>([]);

    const placeholderText = 'Search notes...';

    function handleShowModal() {
        return setIsSearchModalVisible(isSearchModalVisible ? false : true);
    }
    
    function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        let searchInput = event.target.value.toLowerCase();
        let result:Note[] = [];

        if (searchInput.length > 0) {
            result = notes.filter(note => 
                note.title.toLowerCase().includes(searchInput) || 
                note.content.join(' ').toLowerCase().includes(searchInput)
            );
        }

        return setSearchResult(result);
    }

    return (
        <div>
            { isSearchModalVisible ? 
                <div className='p-40 fixed top-0 left-0 size-full flex flex-col items-center'>
                    <div
                        onClick={handleShowModal}
                        className='absolute top-0 left-0 size-full'/>
                    <div className='relative flex flex-col items-center w-full max-w-md text-zinc-300 border border-white/20 bg-black rounded'>
                        <div className='p-2 w-full flex items-center'>
                            <Search className={styles.icon}/>
                            <input
                                onChange={handleSearchInputChange}
                                type='text'
                                placeholder={placeholderText}
                                className='ml-2 outline-none'/>
                        </div>
                        { searchResult.length > 0 ? 
                            <div className='border-t border-white/20 w-full max-h-64 overflow-y-auto *:m-2 *:gap-2 *:p-2 *:flex *:items-center *:cursor-pointer *:hover:bg-white/20 *:rounded'>
                                { searchResult.map(note =>
                                    <Link
                                        key={note.id}
                                        href={`/editor/${note.id}`}>
                                        <FileText className={styles.icon} />
                                        <p className='truncate'>{note.title}</p>
                                        <p className='text-sm opacity-50 text-nowrap'>— {note.folder}</p>
                                    </Link>
                                )}
                                </div>
                        : null }
                    </div>
                </div>
            : null }
            <button 
                onClick={handleShowModal}
                className='p-2 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                <Search className={styles.icon}/>
            </button>
        </div>
    );
}

const styles = {
  icon: 'size-4 min-w-max',
};