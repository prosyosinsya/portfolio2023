import React from 'react'
import Image from 'next/image'
import styles from "../../styles/components.css/Works.module.scss"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Works = () => {
  return (
    <div className={styles.allContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <FormatListBulletedIcon className={styles.icon} />
          <h1 className={styles.title}>Works</h1>
        </div>
        <div className={styles.content}>
          <Image className={styles.img} src="/images/IMG_1010-min.jpeg" width={312*2} height={312} alt="家計簿アプリのサムネ" />
          <p className={styles.text}>
            使用言語<br />
            next.js<br />
            typescript<br />
            firebase<br />
            vercel<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Works