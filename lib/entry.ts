export const generateSlug = (title) => {
	return title
		.replace(/[^\w\s]/gi, '')
		.replaceAll(' ', '-')
		.toLowerCase();
};
