import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard P Smith | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <button><a href="/.auth/login/github">Login with GitHub</a></button>

      </main>

      <footer className={styles.footer}>
        <p>Designed and Developed by Richard P Smith &copy; 2020</p>
      </footer>
    </div>
  )
}
