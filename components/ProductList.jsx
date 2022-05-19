import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        A delicate mix of Asian, Nomadic, and Oriental kitchen in one place.
        <br />
        Explore a variety of delicious plates.
        <br /> Experience the Turkmen hospitality.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
