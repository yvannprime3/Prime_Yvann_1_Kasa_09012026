import React from 'react'
import styles from "./Banner.module.scss"

const Banner = ({banner, imageURL}) => {
  return (
    <div>
      <img className={styles.imgTitle} src={imageURL} alt="chez nous image" />
      {banner}
    </div>
  )
}

export default Banner
