import styles from './styles/home.module.scss'
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>JB ig.news</title>
      </Head>
      <h1 className={styles.title}>
        hello <span>word</span>
      </h1>
    </>
  );
}








