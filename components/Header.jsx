import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { qty } = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image
            src="/images/callBtn.png"
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
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
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
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="/images/cart.png"
              alt="cart image"
              width="30px"
              height="30px"
            />
            <div className={styles.counter}>{qty}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
