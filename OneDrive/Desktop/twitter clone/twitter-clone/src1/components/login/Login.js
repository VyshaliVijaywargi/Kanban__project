import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './login.module.css'

function Login() {
  return (
    <div className={styles.main}>
    <TwitterIcon className={styles.logo1} />
      <h1>Sign in to Twitter</h1>
      <button className={styles.btn1}>sign in with Google</button>
      <button className={styles.btn1}>sign in with Apple</button>
    </div>
  )
}

export default Login
