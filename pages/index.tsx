import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "./components/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="ナカシマシンジのポートフォリオ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
