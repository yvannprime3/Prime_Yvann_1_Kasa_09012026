import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({logement}) => {
  return (
    <article className={styles.card}>
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
    </article>
  )
}

export default Cards
