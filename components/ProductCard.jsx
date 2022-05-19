import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/images/palaw.jpg"
        alt=""
        width="200"
        height="200"
      />
      <h1 className={styles.title}>Palow</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.description}>
        Legendary national rice dish cooked in a traditional cast-iron kazan.
      </p>
    </div>
  );
};

export default ProductCard;
