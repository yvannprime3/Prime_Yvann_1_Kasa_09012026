import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "/src/assets/LOGO2.png"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo2} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
