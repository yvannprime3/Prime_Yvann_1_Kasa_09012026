import React from 'react'
import styles from "./Rating.module.scss"

const Rating = ({value}) => {
  return (
    <div className={styles.rating}>
      {[1,2,3,4,5].map(n => (
        <span key={n} className={n <= value ? "active" : ""}>★</span>
      ))}
    </div>
  )
}

export default Rating
