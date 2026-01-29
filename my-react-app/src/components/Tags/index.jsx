import React from 'react'
import styles from "./Tags.module.scss"

const Tags = ({tags}) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, i) => (
        <span key={i}>{tag}</span>
      ))}
    </div>
  )
}

export default Tags
