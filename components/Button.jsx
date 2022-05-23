import styles from '../styles/AddDish.module.css';

const Button = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.main}>
      Add New Dish
    </div>
  );
};

export default Button;
