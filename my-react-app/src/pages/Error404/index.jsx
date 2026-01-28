import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Error404.module.scss"

const Error404 = () => {
  return (
    <main className={styles.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </main>
  )
}

export default Error404
