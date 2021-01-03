import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import About from './about'


export default function Home() {
  return (
    <Layout title="Richard Smith | Home">
      <div className="flex flex-col ">
        <div className="">
            <p className="py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left animate-fadeIn2">Hello, I'm <span className="text-green-700 font-bold">Richard</span></p>
            <p className="py-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left animate-fadeIn4">and welcome to my site!</p>
        </div>
        <div className="pt-4 text-right text-xs sm:text-sm md:text-base lg:text-lg animate-fadeIn5">
          Aspiring software developer. Avid learner. Tech enthusiast.
        </div>
      </div>
    </Layout>
  )
}
