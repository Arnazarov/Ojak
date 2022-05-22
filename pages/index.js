import Head from 'next/head'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const URI = process.env.NEXT_PUBLIC_URI;

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ojak | Home</title>
        <meta name="description" content="Delicious food from Central Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList productList={data} />
    </div>
  )
}


export async function getServerSideProps() {
  const { data } = await axios.get(`${URI}/api/products`);
  return {
    props: {data}
  };
}
