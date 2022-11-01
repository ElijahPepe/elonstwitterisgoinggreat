import '../styles/global.css'

import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google';

const interVariable = Inter();

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default App