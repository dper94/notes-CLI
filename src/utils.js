export const listNotes = (notes) => {
	// biome-ignore lint/complexity/noForEach: <explanation>
	notes.forEach(({ id, tags, content }) => {
		console.log("id: ", id);
		console.log("tags: ", tags.join(","));
		console.log("content: ", content);
		console.log("\n");
	});
};
