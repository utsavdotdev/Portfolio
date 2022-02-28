import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {useRouter} from 'next/router'
export default function contact() {
    const router = useRouter();
    const blog = router.query.blog;
  return (
    <div className={styles.container}>
      <Head>
        <title>Utsav Bhattarai</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Website
        </h1>

        <p className={styles.description}>
         {blog}-page
        </p>
      </main>
       

    
    </div>
  )
}