import React from 'react'
import styles from "../../styles/components.css/Profile.module.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Profile = () => {
  return (
      <div id="profile" className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <AccountBoxIcon className={styles.icon} />
          <h1 className={styles.title}>Profile</h1>
        </div>
        <p>
          佐賀大学経済学部経営学科の中島慎二と申します。平成14年生まれの大学3年生です。<br />
          昨年の2月からプログラミングの学習を始め、現在はフロントエンドの分野を中心に学習を進めており、<br />
          Next.jsやTypeScriptを使ってWebアプリの個人開発を行なっています。<br />
        </p>
      </div>
  )
}

export default Profile