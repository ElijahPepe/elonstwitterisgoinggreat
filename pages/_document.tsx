import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <title>Elon's Twitter is Going Great</title>
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900 text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}