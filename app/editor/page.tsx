import Image from "next/image";
import { getNote } from "@/lib/notes-data";
import type { Note } from "@/types/Note"

export default function Editor() {
  const data:Note = getNote(1);

  let headerTitle = "aether-notes"

  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <div className="flex">
          {headerTitle}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p>{data.title}</p>
            <p>{data.date}</p>
            <p>{data.content}</p>
          </div>
        </div>
      </main>
    </div>
  );
}