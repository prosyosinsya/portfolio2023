import React from 'react'
import styles from "../../styles/components.css/Contact.module.scss"
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.titleContainer}>
        <EmailIcon className={styles.icon} />
        <h1 className={styles.title}>Contact</h1>
      </div>
      <p className={styles.mail}>メールアドレス: nakashimashinji0401</p>
      <p>github: nakashimashinji0401</p>
    </div>
  )
}

export default Contact