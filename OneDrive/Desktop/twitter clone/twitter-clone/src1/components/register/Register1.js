import React from 'react'
import styles from './register.module.css'


function Register1() {
  return (
    <div className={styles.register1} >
    <div className={styles.main} >
      <img src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" alt="twitter" className={styles.logo2} />
      <h1>Join Twitter Today</h1>
      <button className={styles.btn}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Google" className={styles.logo3}/> Sign up with Google</button>
      <br />
      <button className={styles.btn}> <img src="https://loodibee.com/wp-content/uploads/Apple-Logo-1998-present.png" alt="Apple" className={styles.logo3}/> Sign up with Apple</button>
      <hr />
      </div>
    </div>
  )
}

export default Register1
