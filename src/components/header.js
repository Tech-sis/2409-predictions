import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'
import url from '../assets/Predictables.svg'
import { useNavigate } from 'react-router-dom'
// import { Layout, Menu, Breadcrumb } from 'antd'
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons'

// const { SubMenu } = Menu
// const { Header, Content, Sider } = Layout

const NavHeader = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    localStorage.clear('user')
    navigate('/')
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <Link to="/">
            <img src={url} alt="Predictables" className={styles.logo} />
          </Link>
        </li>
        {localStorage.getItem('user') ? (
          <>
            <li className={styles.list}>
              <Link to="/landing">E-Outcome</Link>
            </li>
            <li className={styles.list}>
              <Link to="/sports">Sports</Link>
            </li>
            <li className={styles.list}>
              <Link to="/fixture">Fixtures</Link>
            </li>
            <li className={styles.list}>
              <Link to="/odds">Odds</Link>
            </li>
            <li className={styles.list}>
              <Link to="/market">Market</Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.list}>
              <Link to="/">Login</Link>
            </li>
          </>
        )}
        {localStorage.getItem('user') ? (
          <li className={styles.list} onClick={handleClick}>
            Logout
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default NavHeader
