import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart';
const URI = process.env.URI;

const Product = ({ product }) => {
  const [size, setSize] = useState(0);
  const [meatOption, setMeatOption] = useState('Beef');
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addProduct({ ...product, meatOption, qty, size }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={product.img} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{product.name}</h1>

          <p className={styles.desc}>{product.desc}</p>
          <span className={styles.price}>${product.price[size]}</span>
          <h3 className={styles.choose}>Select size:</h3>
          <div className={styles.sizes}>
            <div
              className={styles.size}
              onClick={() => {
                setSize(0);
              }}
            >
              <Image src="/images/size.png" layout="fill" alt="" />
              <span className={styles.number}>Small</span>
            </div>
            <div
              className={styles.size}
              onClick={() => {
                setSize(1);
              }}
            >
              <Image src="/images/size.png" layout="fill" alt="" />
              <span className={styles.number}>Large</span>
            </div>
          </div>

          {product.meat.length > 0 && (
            <>
              <h3 className={styles.choose}>Select meat:</h3>
              <div className={styles.option}>
                {product.meat.map((m, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={m}
                      name="meat"
                      className={styles.checkbox}
                      onChange={() => setMeatOption(m)}
                    />
                    <label htmlFor={m}>{m}</label>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={styles.add}>
            <input
              type="number"
              min={1}
              defaultValue={1}
              className={styles.quantity}
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <button className={styles.button} onClick={addToCartHandler}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const { data } = await axios.get(`${URI}/api/products/${id}`);
  return {
    props: { product: data },
  };
}

export default Product;
