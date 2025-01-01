import { insertNote, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
	const newNote = {
		tags,
		content: note,
		id: Date.now(),
	};
	await insertNote(newNote);
	return newNote;
};

export const getAllNotes = async () => {
	const { notes } = await getDB();
	return notes;
};

export const findNotes = async (filter) => {
	const notes = await getAllNotes();
	return notes.filter((note) =>
		note.content.toLowerCase().includes(filter.toLowerCase()),
	);
};

export const removeNote = async (noteId) => {
	const notes = await getAllNotes();
	const newNotes = notes.filter((note) => note.id !== noteId);
	await saveDB({ notes: newNotes });
	return noteId;
};

export const removeAllNotes = () => saveDB({ notes: [] });
