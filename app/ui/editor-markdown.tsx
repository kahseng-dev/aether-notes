'use client'

import { useState, useEffect } from 'react';
import type { Note } from '@/types/Note';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import type { ToolbarNames } from 'md-editor-rt';

export default function EditorMarkdown({ note }: { note: Note }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [content, setContent] = useState(note.content.join(' '));
    const [toolbars] = useState<ToolbarNames[]>([
        'bold',
        'italic',
        'title',
        '-',
        'quote',
        'unorderedList',
        'orderedList',
        '-',
        'link',
        'image',
        'preview',
    ]);
    const style = {
        height: 'calc(100vh - 8.5rem)',
    };

    useEffect(() => {
        // DOM has to be loaded before initializing the editor
        // This is a workaround for
        // Error: Hydration failed because the initial UI does not match what was rendered on the server
        setIsLoaded(true);
    }, []);

    return (
        <>
            { isLoaded && (
                <MdEditor
                    style={style}
                    theme='dark'
                    language='en-US'
                    value={content}
                    preview={false}
                    toolbars={toolbars}
                    onChange={setContent}
                />
            )}
        </>
    );
}