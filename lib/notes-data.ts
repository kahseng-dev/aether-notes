import type { Note } from "@/types/Note"

const data:Note[] = [
    {
        "id": 1,
        "title": "Walk Around the City",
        "date": "2023-10-01",
        "content": ["Took a long walk around the city today. It was a beautiful day and I enjoyed the fresh air. I stopped by a few shops and picked up some groceries. Overall, it was a great day to be outside."],
        "folder": "Notes",
    }
];

export function getAllNotes() {
    return data as Note[]
}

export function getNote(id:number) {
    return data[id] as Note
};