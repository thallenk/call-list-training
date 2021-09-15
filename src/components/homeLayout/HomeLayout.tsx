import React from "react";
import { Col,  Row} from 'antd';
import Login from "../login/login";
import * as S from './HomeLayout.styles'


function HomeLayout() {
    return (
        <S.Wrapper>
            <Row justify='center' align='middle'>
                <Col span={12}>
                    <h1>T4i</h1>
                </Col>
                <Col span={12}>
                    <Login/>
                </Col>
            </Row>
        </S.Wrapper>



      

    )
}

export default HomeLayout