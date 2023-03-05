import React from 'react'
import styles from "../../styles/components.css/Contact.module.scss"
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div id="contact" className={styles.innerContainer}>
      <div className={styles.titleContainer}>
        <EmailIcon className={styles.icon} />
        <h1 className={styles.title}>Contact</h1>
      </div>
      <p className={styles.mail}>メールアドレス: nakashimashinji2002@gmail.com</p>
      <p className={styles.github}>github: 
        <a href="https://github.com/prosyosinsya" className={styles.adress}>  https://github.com/prosyosinsya</a>
      </p>
    </div>
  )
}

export default Contact