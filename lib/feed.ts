import { Feed } from "feed";
import { generateSlug } from "./entry";
import MarkdownIt from "markdown-it";
import entries from '../data/entries.json';

export const buildFeed = async () => {
  const feed = new Feed({
		title: "Elon's Twitter is just going great",
		id: "https://elonstwitterisgoinggreat.com/feed.xml",
		link: "https://elonstwitterisgoinggreat.com/",
		language: "en",
		copyright: "CC-BY-SA 3.0",
		generator: "Elon's Twitter is just going great",
		author: {
			name: "Elijah Conners",
			email: "business@elijahpepe.com",
			link: "https://elijahpepe.com"
		}
  });

	const md = new MarkdownIt();

  entries.forEach((entry) => {
    feed.addItem({
      title: entry.title,
			id: `https://elonstwitterisgoinggreat.com/#${generateSlug(entry.title)}`,
			link: `https://elonstwitterisgoinggreat.com/#${generateSlug(entry.title)}`,
			content: md.render(entry.description),
			date: new Date(entry.date)
    });
  });

  return feed;
};