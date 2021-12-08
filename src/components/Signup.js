import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import styles from '../styles/login.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name,
      email,
      password,
    }
    console.log(data)
    let result = await fetch(
      'https://predictablebackend.herokuapp.com/api/user/signup/',
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
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
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
          <Form.Item name="agreement" valuePropName="checked" noStyle>
            <Checkbox>
              By creating an account, you agree to the {''}
              <Link to="/">Terms of Service</Link> and {''}
              <Link to="/">Conditions</Link> & {''}
              <Link to="/">Privacy Policy.</Link>
            </Checkbox>
          </Form.Item>
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
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Signup
