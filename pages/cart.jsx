import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Dish</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/palaw.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>PALOW</span>
              </td>
              <td>
                <span className={styles.meat}>Small</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.qty}>1</span>
              </td>
              <td>
                <span className={styles.total}>$19.90</span>
              </td>
            </tr>
          </tbody>
          <tbody className={styles.tbody}>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/palaw.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>PALOW</span>
              </td>
              <td>
                <span className={styles.meat}>Small</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.qty}>1</span>
              </td>
              <td>
                <span className={styles.total}>$19.90</span>
              </td>
            </tr>
          </tbody>
          <tbody className={styles.tbody}>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/palaw.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>PALOW</span>
              </td>
              <td>
                <span className={styles.meat}>Small</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.qty}>1</span>
              </td>
              <td>
                <span className={styles.total}>$19.90</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.cartTitle}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$23.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$23.60
          </div>
          <button className={styles.button}>CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
