import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/src/assets/LOGO.png"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
