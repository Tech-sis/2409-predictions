import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import styles from '../styles/login.module.css'
// import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name,
      password,
    }
    console.log(data)
    let result = await fetch(
      'https://predictablebackend.herokuapp.com/api/user/signin/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer my-token',
        },
        body: JSON.stringify(data),
      }
    )
    result = await result.json()
    console.log(result)
    localStorage.setItem('user', JSON.stringify(result))
    navigate('/sports')
  }
  // useEffect(() => {
  //   if (!localStorage.getItem('user')) {
  //     navigate('/')
  //   }
  // }, [])

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              background: '#410369',
              borderColor: '#410369',
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
