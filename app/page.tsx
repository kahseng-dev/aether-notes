import Image from "next/image";
import { getAllNotes } from "@/lib/notes-data";
import type { Note } from "@/types/Note"

export default function Home() {
  const data:Note[] = getAllNotes();

  let headerTitle = "aether-notes"

  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <div className="flex">
          {headerTitle}
        </div>
        <div className="flex flex-col">
          {data.map(item =>
            <a
              href={`/editor/${item.id}`}
              key={item.id}
              className="flex flex-col">
              <p>{item.title}</p>
              <p>{item.date}</p>
              <p>{item.content}</p>
            </a>
          )}
        </div>
      </main>
    </div>
  );
}