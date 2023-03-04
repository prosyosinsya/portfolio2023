import React from 'react'
import styles from "../../styles/components.css/Profile.module.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Profile = () => {
  return (
    <div>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <AccountBoxIcon className={styles.icon} />
          <h1 className={styles.title}>Profile</h1>
        </div>
        <p>
          はじめまして。平成5年生まれの25歳エンジニアのなおと(@naoto_7713)と申します。社会人歴（IT業界）4年目です。<br />
          新卒では中小企業のSIerに入社しました。常駐先ではウォータフォール型でデスクトップアプリ開発に携わりました。<br />
          1年目は開発、2年目は問い合わせ対応と業務効率化のツールを作成です。<br />
          ただ、自分で勉強していくうちにもっと開発をしたい!!Webに携わりたい!!と思い転職を決意。<br />
          web系の自社開発に入社し、現在はフルスタックエンジニアとして働いております。直近でフロントはSPAで実装して、バックエンドはAPI開発です。<br />
        </p>
      </div>
    </div>
  )
}

export default Profile