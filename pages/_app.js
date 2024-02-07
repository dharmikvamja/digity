import '@/styles/globals.css'
import '../styles/css/style.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  
  return(
    <React.Fragment>
      <Head>
      <title>Digity - Digital Agency React/Next Tailwind Css Template</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
  
}
