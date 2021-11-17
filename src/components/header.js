import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

const Header = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <Link to="/">Sports</Link>
          </li>
          <li className={styles.list}>
            <Link to="/">Fixtures</Link>
          </li>
          <li className={styles.list}>
            <Link to="/">Odds</Link>
          </li>
          <li className={styles.list}>
            <Link to="/">Market</Link>
          </li>
          <li className={styles.list}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header
