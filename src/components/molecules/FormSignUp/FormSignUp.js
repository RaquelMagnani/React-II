import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./formSignUp.css"

const FormSignUp = ({onFinish})=>{
    return(
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório, insira seu nome',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Nome" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório, insira seu usuario!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Usuario"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório, insira sua senha!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Cadastrar
          </Button>
          Ou <a href="">Login</a>
        </Form.Item>
      </Form>
    )
}
export default FormSignUp