import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router';
import './form.css'

export default function Forms() {

  const history = useHistory()


  function handleDashaboardPage() {
    history.push('/dashboard')
}
    
  const [project, setProject] = useState('')
  const [status, setStatus] = useState('')
  const [descricao, setDescricao] = useState('')
    return(
    <>
    <h1>NOVO CHAMADO</h1>
    <Form>
      <Form 
      layout='inline'>
        <Form.Item
          label="Projeto"
          name="project"
          rules={[{ required: true, message: 'Please input your Project name!' }]}
        >
        <Input
        id ='inputProject'
        type='text'
        value= {project}
        onChange= {(e) => setProject(e.target.value)}/>
        </Form.Item>
        <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please input your Project status' }]}
        >
        <Input
        id ='inputStatus'
        type='text'
        value= {status}
        onChange= {(e) => setStatus(e.target.value)}/>
        </Form.Item>
      </Form>
      <Form.Item
        label="Descrição"
        name="descricao"
        rules={[{ required: true, message: 'Please input your Project description!' }]}
        >
        <Input
        id ='inputDescricao'
        type='text'
        value= {descricao}
        onChange= {(e) => setDescricao(e.target.value)}/>
        </Form.Item>
        <Button 
         onClick={handleDashaboardPage}
        >
          Voltar
        </Button>
        <Button 
        // onClick={handleState}
        >
          Criar Chamado
        </Button>
    </Form>
    </>
 
    )
}