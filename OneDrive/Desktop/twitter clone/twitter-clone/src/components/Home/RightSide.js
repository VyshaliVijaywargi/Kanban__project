import React from 'react'
import styles from './rightside.module.css'
import { FaSearch } from 'react-icons/fa';

function RightSide() {
  return (
    <>
    <div className={styles.search} >
    <FaSearch className={styles.search_icon} />
      <input type="text" placeholder='Serach Twitter' className={styles.input} />
      </div>
      
      </>
  )
}

export default RightSide
