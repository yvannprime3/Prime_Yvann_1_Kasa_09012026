import React from 'react'
import styles from "./Title.module.scss"

const Title = ({title, imageURL}) => {
  return (
    <div>
      <img className={styles.imgTitle} src={imageURL} alt="chez nous image" />
      {title}
    </div>
  )
}

export default Title
