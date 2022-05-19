import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Turkmen Cuisine</h1>
      <p className={styles.description}>
        A delicate mix of Asian, Nomadic, and Oriental kitchen in one place.
        Explore a variety of delicious plates. Experience the Turkmen
        hospitality.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
