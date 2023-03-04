import React from 'react'
import styles from "../../styles/components.css/Header.module.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerFlex}>
        <h1 className={styles.title}>中島慎二のPortfolio</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <AccountBoxIcon className={styles.icon} />
            <h2>profile</h2>
          </li>
          <li className={styles.navItem}>
            <FormatListBulletedIcon className={styles.icon} />
            <h2>works</h2>
          </li>
          <li className={styles.navItem}>
            <EmailIcon className={styles.icon} />
            <h2>contact</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header