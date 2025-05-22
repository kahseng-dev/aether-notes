'use client'

import Link from "next/link";
import type { Note } from "@/types/Note";
import { ChevronRight } from 'lucide-react';
import { useState } from 'react'

export default function HomeDirectory({ notes }: { notes: Note[] }) {
    const iconSize = 32;
    
    return (
        notes.map(item =>
            <Link
              href={`/editor/${item.id}`}
              key={item.id}
              className="flex items-center py-2 px-4 gap-4 rounded transition duration-300 ease-in-out hover:bg-white/20">
              <div>
                <p><strong>{item.title}</strong></p>
                <div className="flex gap-8">
                  <p><strong>{item.date}</strong></p>
                  <p className="text-zinc-300 line-clamp-1">{item.content}</p>
                </div>
              </div>
              <ChevronRight size={iconSize} />
            </Link>
        )
    );
}