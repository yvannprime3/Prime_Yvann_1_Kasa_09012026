import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/src/assets/LOGO.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
