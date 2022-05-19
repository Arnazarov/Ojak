import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import { useState } from 'react';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const [size, setSize] = useState(0);

  const item = {
    id: 1,
    img: '/images/palaw.jpg',
    name: 'PALOW',
    price: [19.9, 27.9],
    desc: 'Legendary national rice dish cooked in a traditional cast-iron kazan.',
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={item.img} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{item.name}</h1>

          <p className={styles.desc}>{item.desc}</p>
          <span className={styles.price}>${item.price[size]}</span>
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
          <h3 className={styles.choose}>Select meat:</h3>
          <div className={styles.option}>
            <input
              type="radio"
              id="beef"
              name="meat"
              checked
              className={styles.checkbox}
            />
            <label htmlFor="beef">Beef</label>

            <input
              type="radio"
              id="lamb"
              name="meat"
              className={styles.checkbox}
            />
            <label htmlFor="lamb">Lamb</label>

            <input
              type="radio"
              id="chicken"
              name="meat"
              className={styles.checkbox}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>

          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
