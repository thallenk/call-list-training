import React from 'react'
import { Button, Layout, Menu } from 'antd';
import { useHistory } from 'react-router';

import '../Dashboard/Dashboard.css'
import { useSelector} from 'react-redux';
import {  selectUser } from '../../store/User/index'
import Forms from 'components/form/form';

const { Header, Footer, Sider, Content } = Layout;


export default function Dashboard() {
    
    const history = useHistory()

    function handleDashaboardPage() {
        history.push('/dashboard')
    }

    const { name } = useSelector(selectUser)

    return(
        <Layout className='layout'>
            <Sider id='siderForm'>
                <Menu>
                    <Button id='call-btn' onClick={handleDashaboardPage}> 
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
                <Forms/>
            </Content>
            <Footer>Desenvolvido por T4i</Footer>
            </Layout>
        </Layout>

    )
} 