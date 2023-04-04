import '../../css/header.css'
import React from 'react';
import { Input,Space  } from 'antd';
import { Col, Row } from "antd";
import {
    LoginOutlined,
    LogoutOutlined,
    DollarOutlined,
    BellOutlined
} from '@ant-design/icons';
const { Search } = Input;
const Header = () => {
    return (
        <Row gutter={24}>
                <div className='test' > 
            <Col lg={5}>
                    <div className="logo ">
                        <p>NTB</p>
                    </div>
               
            </Col>
            <Col lg={10}>
                     <div className="search" style={{display:"flex" , justifyContent:"left" , alignItems:"center"}}>
                     <Input style={{width:"350px" , height:"34px", borderRadius:"25px"}} placeholder="Basic usage"/>
                    </div>
                    <div className='item-login'>
                    </div>
            </Col>

            <Col lg={5}>
                <div className='item-cart' style={{display:'flex'}}>
                    <div className='cart'>
                        <button><DollarOutlined /></button>
                        <button><BellOutlined /></button> 
                    </div>
                </div>
            </Col>


            <Col lg={2}>
                <div className='item-login' style={{display:'flex' }}>
                    <div className='signin'><button><LoginOutlined /></button></div>
                    <div className='signout'><button><LogoutOutlined /></button></div>
                </div>
            </Col>
            </div>
        </Row>
        
    )
}

export default Header;