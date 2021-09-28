import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { useHistory } from 'react-router';
import {  selectProject } from 'store/Project'
import { useSelector } from 'react-redux';
import { getProject } from 'store/Project';

import { useAppDispatch } from 'store/store';

import './form.css'


export default function Forms() {

  const [value, setValue] = useState('')


  const { Project } = useSelector(selectProject)
  const { Option } = Select;


  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const history = useHistory()

  const dispatch = useAppDispatch()


  function handleState() {
    dispatch(getProject({idProject: value, descricao:descricao}))
    history.push('/dashboard')
}

function handleDashaboardPage() {
  dispatch(getProject({idProject: value, descricao:descricao}))
  history.push('/dashboard')
}
    
  // const [project, setProject] = useState('')

  const [descricao, setDescricao] = useState('')
    return(
    <>
    <h1>NOVO CHAMADO</h1>
    <Form>
      <Form 
      layout='inline'>
       <Form.Item
        label="Projeto"
        name="status"
        rules={[{ required: true, message: 'Please choose your project' }]}
        >
        <Select
        onSelect={(value, e) => setValue(e.value)}
        id="selector" 
        defaultValue="projeto" 
        style={{ width: 360 }} 
        onChange={handleChange} >
          {Project.map((proj) => {
            return(
              <Option value ={proj.id}>{proj.denominacao}</Option>
            )
          })}
        </Select>
        </Form.Item>

        <Form.Item
        id='labelStatus'
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please input your Project status' }]}
        >
        <div 
        id='status'>
          Solicitado
        </div>
        {/* <Input
        id ='inputStatus'
        type='text'
        value= {status}
        onChange= {(e) => setStatus(e.target.value)}/> */}
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
         onClick={handleState}
        >
          Criar Chamado
        </Button>
    </Form>
    </>
 
    )
}