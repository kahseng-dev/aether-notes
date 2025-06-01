'use client'

import { useState, useEffect } from 'react';
import type { Note } from '@/types/Note';
import { Bold, Italic, Heading, Quote, List, ListOrdered, Link, Image, Eye, Columns2, Expand } from 'lucide-react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default function EditorMarkdown({ note }: { note: Note }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [content, setContent] = useState(note.content.join(' '));

    useEffect(() => {
        // DOM has to be loaded before initializing the editor
        // This is a workaround for
        // Error: Hydration failed because the initial UI does not match what was rendered on the server
        setIsLoaded(true);
    }, []);

    return (
        <>
            { isLoaded && (
                <div>
                    <div className='p-10'>
                        <MdEditor
                            theme='dark'
                            language='en-US'
                            value={content}
                            preview={false}
                            onChange={() => setContent(content)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

const styles = {
    icon: 'size-5 min-w-max',
    button: 'p-0.5 cursor-pointer rounded hover:bg-white/20 transition duration-300 ease-in-out',
};