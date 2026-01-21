import React from 'react'
import Cards from "../Cards"
import styles from "./Gallery.module.scss"
import logements from "../../../logements.json"

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      {logements.map(logement => (
        <Cards key={logement.id} logement={logement} />
      ))}
    </section>
  )
}

export default Gallery
