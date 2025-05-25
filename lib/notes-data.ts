import type { Note } from "@/types/Note"

const data:Note[] = [
    {
        id: 1,
        title: "Walk Around the City",
        lastUpdated: "2023-05-10",
        content: [
            "Took a long walk around the city today. It was a beautiful day and I enjoyed the fresh air. I stopped by a few shops and picked up some groceries. Overall, it was a great day to be outside."
        ],
        folder: "Notes",
    },
    {
        id: 2,
        title: "Shopping List",
        lastUpdated: "2023-05-24",
        content: [
            "[ ] Apple",
            "[ ] Milk",
            "[ ] Eggs",
        ],
        folder: "Todos",
    },
];

export function getAllNotes() {
    return data as Note[]
};

export function getNote(id: number) {
    return data.find(note => note.id === id) as Note;
};