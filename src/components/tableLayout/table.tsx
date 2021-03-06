import React from 'react'
import { Table } from 'antd';
import {  selectProject } from 'store/Project'
import { useSelector } from 'react-redux';

import './table.css'

export default function Calls() {

  // const dispatch = useAppDispatch()

  // dispatch(getProject)
  const {Call, Project, CallStatus} = useSelector(selectProject)

  console.log(Call.map(call => Project.filter(proj => proj.id === call.idProject)[0]))


  interface row {
    numero: string,
    descricao: string,
    project: string,
    statusCall: string,

  }
  const dataSource: row[] = Call.map(function(call) {
    const finalData = {
      numero: call.id,
      descricao: call.descricao,
      project: Project.filter((proj) => proj.id === call.idProject).filter((proj) => proj.id === call.idProject)[0].denominacao,
      statusCall: CallStatus.filter((Call) => Call.id === call.idStatus).filter((proj) => proj.id === call.idStatus)[0].denominacao
      
    };
    console.log(finalData.project)
    return finalData;
  });
  


  const columns = [
    {
      title: 'Número',
      dataIndex: 'numero',
      key: 'Número',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'Descricao',
    },
    {
      title: 'Projeto',
      dataIndex: 'project',
      key: 'Projeto',
    },
    {
      title: 'Status',
      dataIndex: 'statusCall',
      key: 'Status',
    },
    {
      title: 'Ações',
      dataIndex: 'Ações',
      key: 'Ações',
    },
  ];

    return(
      <>
      <Table 
      pagination={false}
      dataSource={dataSource}
      columns={columns} 
      />
      </>
    )
}