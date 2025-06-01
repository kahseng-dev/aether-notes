import type { Note } from '@/types/Note';
import { Bold, Italic, Heading, Quote, List, ListOrdered, Link, Image, Eye, Columns2, Expand } from 'lucide-react';

export default function EditorMarkdown({ note }: { note: Note }) {
    return (
        <div>
            <div className='p-10'>
                <span
                    className='border outline-none'
                    contentEditable={true}
                    suppressContentEditableWarning={true}>
                    {note.content}
                </span>
            </div>
            <div className='fixed bottom-0 border-white/20 border-t w-full flex bg-black *:my-1.5 *:py-0.2 *:px-4 *:gap-4 *:flex *:border-r *:border-white/20'>
                <div>
                    <button className={styles.button}>
                        <Bold className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <Italic className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <Heading className={styles.icon} />
                    </button>
                </div>
                <div>
                    <button className={styles.button}>
                        <Quote className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <List className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <ListOrdered className={styles.icon} />
                    </button>
                </div>
                <div>
                    <button className={styles.button}>
                        <Link className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <Image className={styles.icon} />
                    </button>
                </div>
                <div>
                    <button className={styles.button}>
                        <Eye className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <Columns2 className={styles.icon} />
                    </button>
                    <button className={styles.button}>
                        <Expand className={styles.icon} />
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    icon: 'size-5 min-w-max',
    button: 'p-0.5 cursor-pointer rounded hover:bg-white/20 transition duration-300 ease-in-out',
};