import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`}>
        <Image
          className={styles.image}
          src={product.img}
          alt=""
          width="200"
          height="200"
        />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.price[0]}</span>
      <p className={styles.description}>{product.desc}</p>
    </div>
  );
};

export default ProductCard;
