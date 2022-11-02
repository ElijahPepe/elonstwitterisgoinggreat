import { buildFeed } from '../lib/feed';

const Feed = () => null;

export const getServerSideProps = async ({ res }) => {
	const feed = await buildFeed();

	res.setHeader('Content-Type', 'application/atom+xml;charset=UTF-8');
	res.write(feed.rss2());
	res.end();
	return { props: {} };
};

export default Feed;
