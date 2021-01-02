import Head from 'next/head'
import Link from 'next/link'

import Navbar from './Navbar'

export default function Layout({title, children}) {
  return (
    <div>
      <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen justify-between">
        <header className="sticky top-0">
          <Navbar/>
        </header>

        {/* <div className="flex-1 overflow-y-auto "> */}
          <main className="p-5 h-screen">
            
            {children}
          </main>

          <footer className="py-8 bg-gray-900 text-center text-white">
            <p>Designed and Developed by Richard P Smith &copy; 2020</p>
          </footer>
        {/* </div> */}
      </div>
    </div>
  )
}
