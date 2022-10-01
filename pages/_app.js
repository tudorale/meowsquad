import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <>
     <Component {...pageProps} />
     <Head>
        <title>Meow Squad</title>
        <meta name="description" content="Meow Squad is a service that offers advanced tools to assist you in making informed decisions about your NFT investments." />
        <meta name="author" content="Tudor Alexandru -> tudoralexandru.vercel.app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  )
}

export default MyApp
