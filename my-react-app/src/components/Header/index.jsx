import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src="/src/assets/LOGO.png"></img>
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
