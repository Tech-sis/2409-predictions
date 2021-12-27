import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import styles from '../styles/login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import api from '../utils/api'
// import {useHistory} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      email,
      password,
    }
    console.log(data)
    const response = api('user/signin/', 'POST', data)
    localStorage.setItem('user', JSON.stringify(response.data))
    navigate('/sports')
  }

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className={styles.loginformforgot} href="/">
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.loginformbutton}
            style={{
              background: '#001E8B',
              borderColor: '#001E8B',
              width: '-webkit-fill-available',
            }}
            onClick={handleSubmit}
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
        <div className={styles.login__error}>{error}</div>
      </Form>
    </div>
  )
}

export default Login
