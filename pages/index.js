import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allProjectsData = await getProjectsData();
  return {
    props: { allProjectsData }
  };
}

export default function Home({ allProjectsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {allProjectsData.map((item) =>
            <li key={item.id}>
              <Link href={`/projects/${item.id}`}>
                <a> {item.name}   ({item.category})
                </a> 
                </Link>
            </li>
          )}
        </ul>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
