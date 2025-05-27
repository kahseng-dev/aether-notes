'use client'

import { useState } from 'react';
import { Ellipsis, Folder, Hash, Star, Copy, Share, FileText, Trash } from 'lucide-react';
import type { Note } from '@/types/Note';

export default function EditorOptions({ note }: { note: Note }) {
    const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);
    
    return (
        <div>
            <button
                onClick={() => setIsOptionsModalVisible(!isOptionsModalVisible)}
                className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
                <Ellipsis className={styles.icon}/>
            </button>
            { isOptionsModalVisible ? (
                <div className='absolute right-10 mt-2 flex flex-col gap-1 shadow-lg text-black w-48'>
                    <ul className='bg-white rounded-lg'>
                        <li className={`${styles.optionButton} border-b border-zinc-300`}>
                            <div>
                                <p>Folder</p>
                                <p className='text-sm text-zinc-500'>{note.folder}</p>
                            </div>
                            <Folder className={styles.icon}/>
                        </li>
                        <li className={styles.optionButton}>
                            <div>
                                <p>Tags</p>
                                <p className='text-sm text-zinc-500'>{note.folder}</p>
                            </div>
                            <Hash className={styles.icon}/>
                        </li>
                    </ul>
                    <ul className='bg-white rounded-lg'>
                        <li className={`${styles.optionButton} border-b border-zinc-300`}>
                            <p>Favourite</p>
                            <Star className={styles.icon}/>
                        </li>
                        <li className={`${styles.optionButton} border-b border-zinc-300`}>
                            <p>Copy</p>
                            <Copy className={styles.icon}/>
                        </li>
                        <li className={`${styles.optionButton} border-b border-zinc-300`}>
                            <p>Share</p>
                            <Share className={styles.icon}/>
                        </li>
                        <li className={styles.optionButton}>
                            <p>Export as txt</p>
                            <FileText className={styles.icon}/>
                        </li>
                    </ul>
                    <ul className='bg-white rounded-lg'>
                        <div className='flex justify-evenly'>
                            <div className='py-2 px-3 w-1/4 flex items-center justify-center border-r border-zinc-300 cursor-pointer transition duration-300 ease-in-out hover:bg-black/20'>
                                <p className='text-xs'>A</p>
                            </div>
                            <div className='py-2 px-3 w-2/4 text-center'>
                                <p className='text-zinc-400'>100%</p>
                            </div>
                            <div className='py-2 px-3 w-1/4 text-center border-l border-zinc-300 cursor-pointer transition duration-300 ease-in-out hover:bg-black/20'>
                                <p>A</p>
                            </div>
                        </div>
                    </ul>
                    <ul className='bg-white rounded-lg'>
                        <li className='py-2 px-3 flex items-center justify-between cursor-pointer transition duration-300 ease-in-out text-red-400 rounded-lg hover:bg-red-400/20'>
                            <p>Delete</p>
                            <Trash className={styles.icon}/>
                        </li>
                    </ul>
                </div>
                ) : null
            }
        </div>
    );
}

const styles = {
    icon: 'size-5 min-w-max',
    optionButton: 'py-2 px-3 flex items-center justify-between cursor-pointer transition duration-300 ease-in-out hover:bg-black/20',
};