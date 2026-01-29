import React from 'react'
import { Link } from 'react-router-dom'
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"
import Slideshow from "../../components/Slideshow"
import Tags from "../../components/Tags"
import logements from "../../../logements.json"
import { useParams, Navigate } from "react-router-dom"
import styles from "./Logements.module.scss"

const Logements = () => {
  const { id } = useParams()
  const logement = logements.find(l => l.id === id)

  if (!logement) return <Navigate to="*" />

  return (
    <main className={styles.logements}>
        <Slideshow pictures={logement.pictures} />

        <div className={styles.logements__top}>
          <div className={styles.logements__info}>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags tags={logement.tags} />
          </div>

          <div className={styles.logements__host}>
            <div className={styles.host}>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating value={logement.rating} />
          </div>
        </div>

        <div className={styles.logements__collapses}>
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </main>
  )
}

export default Logements
