import { useState } from 'react';
import styles from '../styles/AddDish.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
const URI = process.env.NEXT_PUBLIC_URI;
const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState([]);
  const [meatOptions, setMeatOptions] = useState([]);
  const [meat, setMeat] = useState(null);

  const meatOptionsHandler = () => {
    setMeatOptions((prev) => [...prev, meat]);
    setMeat(null);
  };

  const pricesHandler = (e, index) => {
    const currPrices = price;
    currPrices[index] = e.target.value;
    setPrice(currPrices);
  };

  const addBtnHandler = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`,
        data
      );

      const { url } = uploadRes.data;
      const newDish = {
        title,
        desc,
        price,
        meat: meatOptions,
        img: url,
      };

      const created = await axios.post(`${URI}/api/products`, newDish);

      if (created) {
        setClose(true);
      } else {
        console.log(created);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Create a Dish</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              min={1}
              placeholder="Small"
              onChange={(e) => pricesHandler(e, 0)}
            />
            <input
              className={styles.input}
              type="number"
              min={1}
              placeholder="Large"
              onChange={(e) => pricesHandler(e, 1)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Meat Options</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={(e) => setMeat(e.target.value)}
            />
            <button className={styles.extraButton} onClick={meatOptionsHandler}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {meatOptions.map((option) => (
              <span key={option} className={styles.extraItem}>
                {option}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={addBtnHandler}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Add;
