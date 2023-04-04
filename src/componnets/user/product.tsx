import { Col, Row } from 'antd';
import { Rate } from 'antd';
import "../../css/product.css"
import { useEffect , useState } from "react";
import { Pagination } from 'antd';
import axios from 'axios';
const userLayout = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:3000/product");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
        
    }, []);
    return (
        <div>
            <h5 style={{ margin: '20px'}}>ĐIỆN THOẠI NỔI BẬT NHẤT </h5>
            
            <Row gutter={[8, 24]} className='test3'>
            {products.map((product) => {
                    return (

                <Col span={3} >
                    <div className='box'>
                        <div className='image'>
                            <img src={product.images} alt='product' />
                        </div>
                        <div className='title'>
                        <button><h3>{product.title}</h3></button>
                        </div>
                        <div className='price'>
                        <span className='sale'>{product.sale}</span>
                            <span>{product.price}</span>
                        </div>
                        <div className='reviews'>
                         <Rate allowHalf defaultValue={product.start} 
                         style={{ fontSize: 13 ,color: 'black' }}/>
                        </div>
                    </div>
                </Col>      
                
                    )
                })
            }
            </Row>
            <Pagination pageSize={3} defaultCurrent={5} total={10} style={{display:'flex' , justifyContent:'center',marginTop:"55px"}}  />
        </div>
      
    )
}

export default userLayout;