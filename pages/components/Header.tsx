import React from 'react'
import styles from "../../styles/components.css/Header.module.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerFlex}>
        <h1 className={styles.title}>中島慎二のPortfolio</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <AccountBoxIcon className={styles.icon} />
            <Link href="#profile">
              <h2>profile</h2>
            </Link>
          </li>
          <li className={styles.navItem}>
            <FormatListBulletedIcon className={styles.icon} />
            <Link href="#works">
              <h2>works</h2>
            </Link>
          </li>
          <li className={styles.navItem}>
            <EmailIcon className={styles.icon} />
            <Link href="#contact">
              <h2>contact</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header