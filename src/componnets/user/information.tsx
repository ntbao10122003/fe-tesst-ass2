import "../../css/information.css"
import { Col, Row } from 'antd';
import img from "../../assets/images/product11.png"
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import { useState } from "react";
const Information = ()=> {
   
    return (
        <>
        <div className="container">
            <div className="nav">
               <div className="box-nav">
               <ul>
                    <li>
                        <a href="">Trang chủ</a>
                        <a href=""> Điện thoại</a>
                        <a href=""> Samsung</a>
                        <a href=""> Samsung Galaxy A73 (5G) 256GB</a>
                        <a href=""> iphone</a>
                    </li>
                </ul>
               </div>
            </div>
            <div className="nav-bootom">
                <div className="title-nav">
                    <a href="">Samsung Galaxy A73 (5G) 256GB</a>
                </div>
            </div>
        </div>

        {/* title */}

        <div className="title-product">
            <Row>
                    <Col flex={2}>
                        <div className="image">
                            <img className="img-product" src={img} alt=""/>
                        </div>
                        <div className="images-product">
                            <button><img className="img-products" src={img} alt=""/></button>
                            <button><img className="img-products" src={img} alt=""/></button>
                            <button><img className="img-products" src={img} alt=""/></button>
                            <button><img className="img-products" src={img} alt=""/></button>
                            <button><img className="img-products" src={img} alt=""/></button>
                        </div>
                    </Col>
                    <Col flex={4}>
                        <div className="box-container-title-product">
                            <div className="box-tesst7">
                                <div className="price-product">
                                    <p className="title-product-price">11.690.000 ₫</p>
                                    <p className="title-sale">12.990.000 ₫</p>                        
                                </div>
                            </div>
                            <p className="title-content-product"> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                            
                        <div className="box-cart">
                            <div className="cart-button">
                                <Button type="primary" danger>mua ngay</Button>
                            </div>
                            <div className="add-cart">
                                <i className="icon-cart"> <button><ShoppingCartOutlined /></button></i>
                            </div>
                            <div className="add-cart-title">
                                <p className="title-add-cart"><button>thêm vào giỏ hàng</button></p>
                            </div>
                        </div>
                           
                        </div>
                       
                        
                    </Col>
                   
            </Row>
        </div>
           



        </>
        
    )
}

export default Information