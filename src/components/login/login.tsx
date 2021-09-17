import React, { useState } from 'react';

import { Form,  Button } from 'antd';
import * as S from './login.styles'

import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUser } from '../../store/User/index';


function Login() {

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');



  const dispatch = useDispatch()
  const { user } = useSelector(selectUser)
  function handleState () {
    dispatch(getUser(name))
    window.location.href='/dashboard'
    console.log(user)
  }


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
        <S.StyledInput 
        type='text'
        value= {name}
        onChange= {(e) => setName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <S.StyledInputPassword 
        value= {password}
        onChange= {(e) => setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16 }}>
        <Button 
        onClick={handleState}>
          
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
