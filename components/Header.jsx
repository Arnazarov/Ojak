import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image
            src="/images/telephone.png"
            alt="call button"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CALL NOW!</div>
          <div className={styles.text}>222 222 2222!</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/images/logo2.png"
            alt="logo"
            width="120px"
            height="100px"
          />
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/images/cart.png"
            alt="cart image"
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
