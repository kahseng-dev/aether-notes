'use client'

import { useEffect, useRef } from 'react';
import type { Note } from '@/types/Note';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';

const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "This is my awesome editor!",
                "level": 1
            }
        },
    ]
} as OutputData;

export default function EditorCore({ note }: { note: Note }) {
    const ejInstance = useRef<EditorJS | null>(null);

    const initalizeEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();
            },
            tools: {
                header: Header,
            },
        });
    };

    useEffect(() => {
        if (!ejInstance.current) {
            initalizeEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    
    return (
        <><div id='editorjs'></div></>
    );
}

const styles = {
    icon: 'size-5 min-w-max',
};