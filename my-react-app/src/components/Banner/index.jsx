import React from 'react'
import styles from "./Banner.module.scss"

const Banner = ({banner, imageURL}) => {
  return (
    <div className={styles.container}>
      <img className={styles.imgTitle} src={imageURL} alt="chez nous image" />
      <h1>{banner}</h1>
    </div>
  )
}

export default Banner
