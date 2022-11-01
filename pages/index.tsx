import Card from '../components/Card'
import entries from '../data/entries.json'

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center items-start max-w-3xl pt-8 border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Elon's Twitter is going just great.
        </h1>

        {entries.map((entry) => (
          // eslint-disable-next-line react/jsx-key
          <Card title={entry.title} description={entry.description} date={entry.date}/>
        ))}
      </div>
    </div>
  )
}
