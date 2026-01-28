import React from 'react'
import { useState } from "react"
import styles from "./Collapse.module.scss"

const Collapse = ({title, content}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.collapse}>
      <button className={styles.collapse__header} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`arrow ${open ? "open" : ""}`}>⌃</span>
      </button>

      {open && (
        <div className={styles.collapse__content}>
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : <p>{content}</p>}
        </div>
      )}
    </div>
  )
}

export default Collapse
