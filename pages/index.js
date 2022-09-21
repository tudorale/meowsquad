import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <Head>
        <title>Meow Squad</title>
        <meta name="viewport" />
        <meta name="description" content="Meow Squad is a service that offers advanced tools to assist you in making informed decisions about your NFT investments." />
        <meta name="author" content="Tudor Alexandru -> tudoralexandru.vercel.app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.background}>
      </div>
    </>
  )
}
