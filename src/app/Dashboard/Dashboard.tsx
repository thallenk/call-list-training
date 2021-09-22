import React from 'react'
import { Button, Layout, Menu } from 'antd';
import { useHistory } from 'react-router';

import './Dashboard.css'
import { useSelector} from 'react-redux';
import {  selectUser } from '../../store/User/index'
import { selectProject } from 'store/Project';
import Calls from 'components/tableLayout/table';

const { Header, Footer, Sider, Content } = Layout;


export default function Dashboard() {
    
    const history = useHistory()
    function handleCreateCallPage() {
        history.push('/create-call')
    }

    const { name } = useSelector(selectUser)

    return(
        <Layout className='layout'>
            <Sider>
                <Menu>
                    <Button id='call-btn'>
                        Chamados
                    </Button>
                </Menu>
            </Sider>
            <Layout >
            <Header>
                <h1 className='logo'>T4i</h1>
                <div className='client'>
                    Olá, <text style={{ textTransform: 'uppercase'}}>{name}!</text>
                </div>

            </Header>
            <Content>
                <Button id='create-btn' onClick={handleCreateCallPage}>
                    Criar Chamado
                </Button>
                <Calls/>
            </Content>
            <Footer>Desenvolvido por T4i</Footer>
            </Layout>
        </Layout>

    )
} 