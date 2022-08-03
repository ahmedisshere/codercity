import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <style jsx>

        {`
        h2{
          font-size: 38px;
        }
        h3{
          font-size: 25px;
        }
        `}

      </style>


      <Head>
        <title>CodersTenT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>CodersTent</span>
        </h1>

        <div className={styles.imagewrap}>
        <Image className={styles.myImg} src="/homeimg.jpg" height={237} width={358} />
        </div>

        <p className={styles.description}>
          A blog for Coders by a Coder ~ 
        </p>

        <div className="blogs">
          <h2> <span className='mySpan'> Latest Blogs </span> </h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is a language which is used to design the logic for the web</p>
          </div>

          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is a language which is used to design the logic for the web</p>
          </div>

          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is a language which is used to design the logic for the web</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
