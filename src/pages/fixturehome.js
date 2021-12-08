import React from 'react'
// import Away from '../components/awayteam'
import Home from '../components/hometeam'
import Head2Head from '../components/head2head'
import NavHeader from '../components/header'
import styles from '../styles/home.module.css'

const Fixturehome = () => {
  return (
    <>
      <NavHeader />
      <div className={styles.fix}>
        <h1 className={styles.h1}>Recent Games</h1>
        <Home />
        <Head2Head />
      </div>
    </>
  )
}

export default Fixturehome
