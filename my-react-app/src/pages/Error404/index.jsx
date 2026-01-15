import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  )
}

export default Error404
