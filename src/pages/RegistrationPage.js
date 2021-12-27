import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { Card } from 'antd'
import Login from '../components/Login'
import Signup from '../components/Signup'
import NavHeader from '../components/Header'

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
    <>
    <NavHeader />
    <div className={styles.login}>
      <Card
        className={styles.antcard}
        headStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        tabList={tabList}
        // tabBarStyle={{color: 'red',}}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key)
        }}
        hoverable
      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
    </>
  )
}

export default RegistrationPage
