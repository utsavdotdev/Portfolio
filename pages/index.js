import Head from 'next/head'
import Loader from '../components/loader';
export default function Home() {
  return (
    <>
      <Head>
        <title>Utsav Bhattarai</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Loader/>
    </>
  )
}
