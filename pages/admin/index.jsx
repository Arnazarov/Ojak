import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Admin.module.css';
const URI = process.env.NEXT_PUBLIC_URI;

const index = ({ products, orders }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Product List</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    alt=""
                    objectFit="cover"
                  />
                </td>
                <td>{product._id.slice(0, 8)}...</td>
                <td>{product.title}</td>
                <td>${product.price.join('-')}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>0519898194</td>
              <td>Omar Hayyam</td>
              <td>$13.99</td>
              <td>PayPal</td>
              <td>Paid</td>
              <td>
                <button className={styles.buttonStatus}>Edit status</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data: products } = await axios.get(`${URI}/api/products`);
  const { data: orders } = await axios.get(`${URI}/api/orders`);

  return {
    props: {
      products,
      orders,
    },
  };
}

export default index;
