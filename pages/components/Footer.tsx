import React from 'react'
import styles from "../../styles/components.css/Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>profile</li>
        <li className={styles.navItem}>works</li>
        <li className={styles.navItem}>contact</li>
      </ul>
      <p className={styles.copyright}>Copyright©Shinji Nakashima. All Rights Reserved</p>
    </div>
  )
}

export default Footer