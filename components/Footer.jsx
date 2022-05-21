import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src="/images/bg.png" objectFit="contain" layout="fill" alt="" />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>EXPLORE OUR PLACES</h1>
        <p className={styles.text}>
          1127 N Northwest Hwy
          <br /> Chicago, 60068
          <br /> (123) 987-1010
        </p>
        <p className={styles.text}>
          8645 W Foster Ave.
          <br /> Chicago, 65230
          <br /> (773) 123-4561
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY - FRIDAY
          <br /> 10:00 – 23:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND US</h1>
        <div className={styles.icon}>
          <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
