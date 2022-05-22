import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, qty, totalPrice, size } = useSelector(
    (state) => state.cart
  );

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
          {products.map((product) => (
            <tbody key={product.id} className={styles.tbody}>
              <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.meat}>
                    {size === 0 ? `Small` : `Large`}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price[size]}</span>
                </td>
                <td>
                  <span className={styles.qty}>{product.qty}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price[size] * product.qty}
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.cartTitle}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>${totalPrice}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>${totalPrice}
          </div>
          <button className={styles.button}>CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
