import React from 'react'
import Image from 'next/image'
import styles from "../../styles/components.css/Works.module.scss"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Works = () => {
  return (
    <div id="works" className={styles.allContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <FormatListBulletedIcon className={styles.icon} />
          <h1 className={styles.title}>Works</h1>
        </div>
        <div className={styles.content}>
          <a href="https://my-money-phi.vercel.app" className={styles.myMoney}>
            <Image 
              className={styles.img} 
              src="/images/IMG_1010-min.jpeg" 
              layout='fill' 
              objectFit='contain' 
              alt="家計簿アプリのサムネ" 
            />
          </a>
          <div className={styles.text}>
            <h2>お小遣い用家計簿</h2>
            <p className={styles.description}>
              個人の家計管理をする際にあまり機能の多くない、シンプルな家計簿アプリが欲しかったため開発しました。
            </p>
            <h3>使用技術</h3>
            <p>Next.js/TypeScript/Firebase</p>
            <p className={styles.github}>github: 
              <a href="https://github.com/prosyosinsya/my-money" className={styles.adress}>  https://github.com/prosyosinsya/my-money</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works