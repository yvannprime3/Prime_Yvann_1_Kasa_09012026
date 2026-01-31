import React from 'react'
import Cards from "../Cards"
import styles from "./Gallery.module.scss"
import logements from "../../../logements.json"
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      {logements.map(logement => (
        <Link key={logement.id} to={`/logements/${logement.id}`}><Cards logement={logement} /></Link>
      ))}
    </section>
  )
}

export default Gallery
