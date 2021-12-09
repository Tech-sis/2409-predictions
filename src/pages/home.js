import React from 'react'
import Fixtures from '../components/fixtures'
import styles from '../styles/home.module.css'
import NavHeader from '../components/header'

const Home = () => {
    return (
        <div className={styles.background}>
        <NavHeader />
        <div className={styles.fix}>
            {/* <h1>Home</h1> */}
            <Fixtures />
        </div>
        </div>
    )
}

export default Home
