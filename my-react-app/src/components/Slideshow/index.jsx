import React from 'react'
import { useState } from "react"
import styles from "./Slideshow.module.scss"

const Slideshow = ({pictures}) => {
    const [index, setIndex] = useState(0)
    const total = pictures.length

    const next = () => setIndex((index + 1) % total)
    const prev = () => setIndex((index - 1 + total) % total)

  return (
    <div className={styles.carousel}>
      <img src={pictures[index]} alt="Logement" />

      {total > 1 && (
        <>
          <button className={styles.left} onClick={prev}>‹</button>
          <button className={styles.right} onClick={next}>›</button>
          <span className={styles.counter}>
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow
