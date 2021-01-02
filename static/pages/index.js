import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import About from './about'


export default function Home() {
  return (
    <Layout title="Richard Smith | Software Developer">
      <div>
        <button><a href="/.auth/login/github">Login with GitHub</a></button>
      </div>
    </Layout>
  )
}
