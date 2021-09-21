import React from "react";
import { Col,  Row} from 'antd';
import Login from "../login/login";
import './HomeLayout.css'


function HomeLayout() {
    return (
            <Row justify='center' align='middle'>
                <Col span={12} id="logo">
                    <h1>T4i</h1>
                </Col>
                <Col span={12}>
                    <Login/>
                </Col>
            </Row>



      

    )
}

export default HomeLayout