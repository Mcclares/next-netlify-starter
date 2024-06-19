import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Promo24</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='promo'>
            <p>Promo:</p>
        </div>
      </main>


    </div>
  )
}
