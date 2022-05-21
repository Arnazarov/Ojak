import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.description}>
        A delicate mix of Asian, Nomadic, and Oriental kitchen in one place.
      </h2>
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
