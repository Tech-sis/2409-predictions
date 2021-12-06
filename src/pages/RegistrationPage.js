import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Card } from 'antd'
import Login from '../components/Login'
import Signup from '../components/Signup'

const tabList = [
  {
    key: 'Signup',
    tab: 'Sign up',
  },
  {
    key: 'Login',
    tab: 'Log in',
  },
]

const contentList = {
  Signup: <Signup />,
  Login: <Login />,
}

const RegistrationPage = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('Signup')

  const onTab1Change = (key) => {
    setActiveTabKey1(key)
  }
  return (
    <div className={styles.login}>
      <Card
        className={styles.antcard}
        // style={{ width: '100%' }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key)
        }}
        hoverable

      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
  )
}

export default RegistrationPage

// <div className={styles.container}>
// {/* <h3 className={styles.h1}>Please Sign In</h3>
// <form className={styles.form}>
//   <input className={styles.input} type="text" placeholder="Username" />
//   <input
//     className={styles.input}
//     type="password"
//     placeholder="Password"
//   />
//   <button className={styles.btn} type="submit">
//     Login
//   </button>
// </form> */}
// </div>
