'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Search, FileText } from 'lucide-react';

export default function SearchButton() {
    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
    
    const placeholderText = 'Search notes...';

    function handleShowModal() {
        return setIsSearchModalVisible(isSearchModalVisible ? false : true);
    }

    function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        return
    }

    return (
        <div>
            { isSearchModalVisible ? 
                <div className='p-40 fixed top-0 left-0 size-full flex flex-col items-center'>
                    <div
                        onClick={handleShowModal}
                        className='absolute top-0 left-0 size-full'/>
                    <div className='relative flex flex-col items-center w-full max-w-md text-zinc-300 border border-white/20 bg-black rounded'>
                        <div className='p-2 w-full flex items-center border-b border-white/20'>
                            <Search className={styles.icon}/>
                            <input
                                onChange={handleSearchInputChange}
                                type='text'
                                placeholder={placeholderText}
                                className='ml-2 outline-none'/>
                        </div>
                        <div className='w-full *:m-2 *:gap-2 *:p-2 *:flex *:items-center *:cursor-pointer *:hover:bg-white/20 *:rounded'>
                            <div>
                                <FileText className={styles.icon} />
                                <p>Note/Note</p>
                            </div>
                        </div>
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