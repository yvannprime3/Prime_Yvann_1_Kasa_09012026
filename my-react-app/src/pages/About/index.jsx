import React from 'react'
import Banner from "../../components/Banner"
import banner2 from "../../assets/banner2.png"
import Collapse from "../../components/Collapse"
import styles from "./About.module.scss"

const About = () => {
  return (
    <main className={styles.about}>
      <Banner imageURL={banner2} />
      
      <section className={styles.about__collapses}>
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées."
          />
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez besoin d'aide."
          />
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
          />
        </section>
    </main>
  )
}

export default About
