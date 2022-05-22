import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Cart.module.css';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';



const Cart = () => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const dispatch = useDispatch();
  const { products, qty, totalPrice, size } = useSelector(
    (state) => state.cart
  );

  // This values are the props in the UI
  const amount = '2';
  const currency = 'USD';
  const style = { layout: 'vertical' };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

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
          <div className={styles.paymentMethods}>
            <PayPalScriptProvider
              options={{
                'client-id': PAYPAL_CLIENT_ID,
                components: 'buttons',
                currency: 'USD',
                'disable-funding': 'paylater',
                'enable-funding': 'venmo'
                
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
