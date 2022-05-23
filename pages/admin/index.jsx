import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Admin.module.css';
const URI = process.env.NEXT_PUBLIC_URI;

const Index = ({ products, orders }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ['Preparing', 'On the way', 'Delivered'];

  const deleteBtnHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${URI}/api/products/${id}`);
      setProductList(productList.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editStatusHandler = async (id) => {
    const orderToUpdate = orderList.filter((order) => order._id === id)[0];
    const statusToUpdate = orderToUpdate.status;

    try {
      const { data } = await axios.put(`${URI}/api/orders/${id}`, {
        status: statusToUpdate + 1,
      });

      setOrderList([...orderList.filter((order) => order._id !== id), data]);
    } catch (error) {
      console.log(error);
    }
  };

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
            {productList.map((product) => (
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
                  <button className={styles.button} onClick={() => {}}>
                    Edit
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => deleteBtnHandler(product._id)}
                  >
                    Delete
                  </button>
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
            {orderList.map((order) => (
              <tr key={order._id}>
                <td>{order._id.slice(0, 8)}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>
                  {order.payment === 0 ? (
                    <span>PayPal/Paid</span>
                  ) : 1 ? (
                    <span>Venmo/Paid</span>
                  ) : (
                    <span>Debit/Paid</span>
                  )}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.buttonStatus}
                    onClick={() => editStatusHandler(order._id)}
                  >
                    Edit Status
                  </button>
                </td>
              </tr>
            ))}
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

export default Index;
