import React from 'react'
import { Button, Layout, Menu } from 'antd';
import './Dashboard.css'

import { useSelector} from 'react-redux';
import {  selectUser } from '../../store/User/index'
import { selectProject } from 'store/Project';
import Calls from 'components/tableLayout/table';

const { Header, Footer, Sider, Content } = Layout;


export default function Dashboard() {
    
    const { name } = useSelector(selectUser)

    const {Call} = useSelector(selectProject)
    return(
        <Layout className='layout'>
            <Sider>
                <Menu>
                    <Button>
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
                {/* <ul>
                    {Call.map((call) => <li>{call.descricao}</li>)}
                </ul> */}
                <Calls/>
            </Content>
            <Footer>Desenvolvido por T4i</Footer>
            </Layout>
        </Layout>

    )
} 