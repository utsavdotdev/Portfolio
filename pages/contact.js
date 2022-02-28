import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utsav Bhattarai</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Website!
        </h1>

        <p className={styles.description}>
         contact-page
        </p>
      </main>
       

    
    </div>
  )
}