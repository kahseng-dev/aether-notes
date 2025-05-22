import Image from "next/image";
import Link from "next/link";
import { getAllNotes } from "@/lib/notes-data";
import type { Note } from "@/types/Note";
import HomeDirectory from "@/app/ui/home-directory";
import { Settings, Search } from 'lucide-react';

export default function Home() {
  const iconSize = 24;

  const data:Note[] = getAllNotes();

  let headerTitle = "aether-notes"

  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <div className="p-2 flex items-center justify-between">
          <Link
            href="/settings"
            className="p-2 rounded transition duration-300 ease-in-out hover:bg-white/20">
              <Settings size={iconSize}/>
          </Link>
          <p>{headerTitle}</p>
          <Link
            href="/search"
            className="p-2 rounded transition duration-300 ease-in-out hover:bg-white/20">
              <Search size={iconSize}/>
          </Link>
        </div>
        <div className="flex flex-col">
          <HomeDirectory notes={data}/>
        </div>
      </main>
    </div>
  );
}