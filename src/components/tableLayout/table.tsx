import React, { useEffect } from 'react'
import { Table } from 'antd';
import { getProject, selectProject } from 'store/Project'
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';

export default function Calls() {

  // const dispatch = useAppDispatch()

  // dispatch(getProject)
  const {Call,CallStatus,Project} = useSelector(selectProject)
  console.log(Call)
  console.log(Call.map(call => Project.filter(proj => proj.id === call.idProject)))
  interface row {
    numero: string,
    descricao: string,
    // project: string,
    // statusCall: string,

  }
  const dataSource: row[] = Call.map(function(call) {
    const finalData = {
      numero: call.id,
      descricao: call.descricao,
      // project: Project.map((proj) => proj.id === call.idProject ? proj.descricao: ''),
      // statusCall: CallStatus.map((Call) => Call.id === call.idStatus ? Call.descricao: '')
    };
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
      dataIndex: 'Projeto',
      key: 'Projeto',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
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
      <ul>
        <li>
          {Call.map(call => call.idProject)}
        </li>
      </ul>
      <Table 
      pagination={false}
      dataSource={dataSource}
      columns={columns} 
      />
      </>
    )
}