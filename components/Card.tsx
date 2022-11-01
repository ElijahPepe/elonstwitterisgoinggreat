import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

export default function Card({
	title,
	description,
	date
}) {
	const createdAt = new Date(date);

	return (
		<div className="tweet rounded-lg border border-gray-200 dark:border-gray-800 px-6 py-4 my-4 w-full bg-white dark:bg-gray-900">
			<span className="font-bold text-gray-900 dark:text-gray-100">
				{title}
			</span>
			<div className="text-gray-500 text-sm">
				<time>{format(createdAt, 'MMMM d, y')}</time>
			</div>
			<div className="mt-4 text-gray-700 dark:text-gray-200 [&_a]:text-bold [&_a]:text-link-light [&_a]:dark:text-link-dark [&_ul]:list-disc [&_ul]:px-4 [&_ul_li]:marker:text-gray-900 [&_ul_li]:marker:dark:text-gray-100">
				<ReactMarkdown>{description}</ReactMarkdown>
			</div>
		</div>
	)
}