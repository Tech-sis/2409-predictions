import React from 'react'
// import Away from '../components/awayteam'
import Home from '../components/Hometeam'
import Head2Head from '../components/Head2head'
import NavHeader from '../components/Header'
import styles from '../styles/home.module.css'

const Fixturehome = () => {
  return (
    <div className={styles.background}>
      <NavHeader />
      <div className={styles.fix}>
        <h1 className={styles.h1}>Recent Games</h1>
        <Home />
        <Head2Head />
      </div>
    </div>
  )
}

export default Fixturehome
