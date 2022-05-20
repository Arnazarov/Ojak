import Image from 'next/image';
import styles from '../../styles/Order.module.css';

const Order = () => {
  const status = 0;
  const statusHandler = (index) => {
    if (index - status < 1) return styles.done;
    else if (index - status === 1) return styles.progress;
    else return styles.incomplete;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>
                  <span className={styles.id}>071812394</span>
                </td>
                <td>
                  <span className={styles.name}>Omar Hayyam</span>
                </td>
                <td>
                  <span className={styles.address}>
                    4517 W Bromwich Albion, London
                  </span>
                </td>
                <td>
                  <span className={styles.total}>$23.60</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusHandler(0)}>
            <Image src="/images/paid.png" width="30px" height="30px" alt="" />
            <span>Payment</span>
            <div className={styles.icon}>
              <Image
                src="/images/checked.png"
                width="20px"
                height="20px"
                alt=""
              />
            </div>
          </div>
          <div className={statusHandler(1)}>
            <Image src="/images/bake.png" width="30px" height="30px" alt="" />
            <span>Baking</span>
            <div className={styles.icon}>
              <Image
                src="/images/checked.png"
                width="20px"
                height="20px"
                alt=""
              />
            </div>
          </div>
          <div className={statusHandler(2)}>
            <Image src="/images/bike.png" width="30px" height="30px" alt="" />
            <span>On the way</span>
            <div className={styles.icon}>
              <Image
                src="/images/checked.png"
                width="20px"
                height="20px"
                alt=""
              />
            </div>
          </div>
          <div className={statusHandler(3)}>
            <Image
              src="/images/delivered.png"
              width="30px"
              height="30px"
              alt=""
            />
            <span>Delivered</span>
            <div className={styles.icon}>
              <Image
                src="/images/checked.png"
                width="20px"
                height="20px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.cartTitle}>ORDER TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$23.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$23.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
