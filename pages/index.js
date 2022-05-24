import Head from 'next/head'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';
import Button from '../components/Button';
import Add from '../components/AddDishCard';

const URI = process.env.NEXT_PUBLIC_URI;

export default function Home({data, admin}) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ojak | Home</title>
        <meta name="description" content="Delicious food from Central Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {admin && <Button setClose={setClose} />}
      <ProductList productList={data} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}


export async function getServerSideProps(context) {

  const myCookie = context.req?.cookies || '';
  let admin = false;
  if (myCookie.token === process.env.NEXT_PUBLIC_TOKEN) {
    admin = true;
  }

  const { data } = await axios.get(`${URI}/api/products`);
  return {
    props: {data, admin}
  };
}
