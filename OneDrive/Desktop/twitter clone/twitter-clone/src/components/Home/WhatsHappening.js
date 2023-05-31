import React from 'react'
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from 'react-icons/fa';
import styles from './whatshappenning.module.css'

function WhatsHappening() {
  return (
    <div className={styles.what_happenning_comp}>
    <div className={styles.abc}>
      <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="user" className={styles.img}/>
      <input type="text"  placeholder="What's Happenning" className={styles.input} />
      </div>
      <div className={styles.icons}>
          <FaRegImage className='icon1'/>
          <FaRegListAlt/>
          <FaRegSmile/>
          <FaCalendarCheck/>
          <button className={styles.btn1}>Tweet</button>
          </div>
      <br />
      <hr />
    </div>
  )
}

export default WhatsHappening
