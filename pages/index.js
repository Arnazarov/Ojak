import Head from 'next/head'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ojak | Home</title>
        <meta name="description" content="Delicious food from Central Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList />
    </div>
  )
}
