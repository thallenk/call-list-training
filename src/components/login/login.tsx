import React from 'react';

import { Form,  Button } from 'antd';
import * as S from './login.styles'
function Login() {

  return (
    <S.Wrapper>
    <h1>Acesso ao Portal</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      layout="vertical"

    >
      <Form.Item
        label="Usuário"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <S.StyledInput />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <S.StyledInputPassword />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16 }}>
        <Button  htmlType="submit">
          Entrar
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16 }}>
        <Button type="link" htmlType="button">
          Esqueci minha senha!
        </Button>
      </Form.Item>


    </Form>
    </S.Wrapper>
  );
};

export default Login;
