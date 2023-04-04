import { Carousel } from "antd";
import { Col, Row } from "antd";
import slider from "../../assets/images/slider.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import "../../css/slider.css"
const Slider = () => {
  return (
    <div style={{ padding: '20px'}}>
    <Row gutter={24}>
      <Col lg={24}>
        <Carousel autoplay>
          <div className="test">
            <img src={slider} alt="banner 1" />
          </div>
          <div className="test">
            <img src={slider2} alt="banner 2" />
          </div>
          <div className="test">
            <img src={slider3} alt="banner 3" style={{width:'1792px',height:'455px'}} />
          </div>
        </Carousel>
      </Col>
    </Row>
    </div>
    
  );
};

export default Slider;
