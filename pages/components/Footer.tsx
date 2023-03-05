import React from 'react'
import styles from "../../styles/components.css/Footer.module.scss"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.navList}>
        <Link href="#profile">
          <li className={styles.navItem}>profile</li>
        </Link>
        <Link href="#works">
          <li className={styles.navItem}>works</li>
        </Link>
        <Link href="#contact">
          <li className={styles.navItem}>contact</li>
        </Link>
      </ul>
      <p className={styles.copyright}>Copyright©Shinji Nakashima. All Rights Reserved</p>
    </div>
  )
}

export default Footer