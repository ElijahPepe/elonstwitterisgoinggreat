import Card from '../components/Card';
import entries from '../data/entries.json';

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
	return (
		<div className="px-8 bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col justify-center items-start max-w-3xl pt-8 border-gray-200 dark:border-gray-700 mx-auto pb-16">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mx-auto mb-1 text-black dark:text-white">
					Elon's Twitter is going just great.
				</h1>

				{entries.map((entry) => (
					// eslint-disable-next-line react/jsx-key
					<Card title={entry.title} description={entry.description} date={entry.date} />
				))}
			</div>
			<footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
				<hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
				<div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
					<div className="text-gray-400">
						<svg className="h-4 w-4 ml-auto mt-[-2px] fill-current" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
						</svg>
					</div>
					<div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
						<a
							className="capsize text-gray-400 font-medium"
							href="https://github.com/ElijahPepe/elonstwitterisgoinggreat"
						>
							GitHub
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
