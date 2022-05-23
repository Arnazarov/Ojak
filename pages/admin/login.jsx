import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Login.module.css';
const URI = process.env.NEXT_PUBLIC_URI;
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();

  const signInBtnHandler = async () => {
    try {
      const { data } = await axios.post(`${URI}/api/login`, {
        username,
        password,
      });

      router.push('/admin');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="Username"
          type="text"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signInBtnHandler} className={styles.button}>
          SIGN IN
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
