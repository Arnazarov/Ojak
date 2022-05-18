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
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>222 222 2222!</div>
        </div>
      </div>
      <div className={styles.item}>center</div>
      <div className={styles.item}>end</div>
    </div>
  );
};

export default Header;
