import Head from 'next/head'
import Link from 'next/link'

import Navbar from './Navbar'

export default function Layout({title, children}) {
  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        <header className="sticky top-0">
          <Navbar/>
        </header>

        {/* <div className="flex flex-col items-between"> */}
          <main className="my-auto">
            {children}
          </main>

          <footer className="pt-3 pb-6 text-center">
            <hr className="container m-auto pb-6"/>
            <p className="text-xs">Designed and Developed by Richard P Smith &copy; {year}</p>
          </footer>
        {/* </div> */}
      </div>
    </div>
  )
}
