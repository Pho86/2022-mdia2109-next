import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import ImgCard from '../comps/ImgCard'
import Navbar from '../comps/Navbar/v2'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My First App.</a>
        </h1>
        <div> 
        <Link href="/boiler">Go to Boiler</Link>
        <br></br>
        <Link href="/about">Go to About</Link>
        
        <ImgCard
        bg="#301934"
        >
          <h3>This is a children in the tag.</h3>
          <p>More stuff</p>
          <hr/>
          <p>Yay</p>
        </ImgCard>

        <ImgCard
        tcl="#ABC980"
        img="https://placekitten.com/300/300" 
        text="This is a cat."/>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
