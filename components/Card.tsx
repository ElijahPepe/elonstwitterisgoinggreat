import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import NextLink from 'next/link';
import { generateSlug } from '../lib/entry';

export default function Card({
	title,
	description,
	date
}) {
	const createdAt = new Date(date);

	return (
		<div className="tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 my-4 w-full bg-white dark:bg-gray-900">
			<h2 className="font-bold text-gray-900 dark:text-gray-100" id={generateSlug(title)}>
				<NextLink className="relative cursor-pointer float-right clear-both text-gray-400" href={'#' + generateSlug(title)}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
					</svg>
				</NextLink>
				{title}
			</h2>
			<div className="text-gray-500 text-sm">
				<time>{format(createdAt, 'MMMM d, y')}</time>
			</div>
			<div className="mt-4 text-gray-700 dark:text-gray-200 [&_a]:text-bold [&_a]:text-link-light [&_a]:dark:text-link-dark [&_ul]:list-disc [&_ul]:px-4 [&_ul_li]:marker:text-gray-900 [&_ul_li]:marker:dark:text-gray-100">
				<ReactMarkdown>{description}</ReactMarkdown>
			</div>
		</div>
	)
}