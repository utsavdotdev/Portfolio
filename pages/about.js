import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utsav Bhattarai</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Website
        </h1>

        <p className={styles.description}>
         About-page
        </p>
      </main>
       

    
    </div>
  )
}