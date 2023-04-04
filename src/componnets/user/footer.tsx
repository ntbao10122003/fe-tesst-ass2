import { Col, Row } from "antd";
import atm1 from "../../assets/images/atm1.png";
import atm2 from "../../assets/images/atm2.png";
import atm3 from "../../assets/images/atm3.png";
import atm4 from "../../assets/images/atm4.png";
import atm5 from "../../assets/images/logo-footer.png"
import "../../css/footer.css";
const Footer = () => {
  return (
    <div className="container" style={{ padding: 20, height: "250px" }}>
      <div className="box-footer">
        <Row gutter={[4, 24]}>
          <Col lg={6}>
            <div className="text-footer-1">
              <h3 style={{fontSize:"15px"}}>Tìm cửa hàng</h3>
              <span className="text1">Tìm cửa hàng gần nhất</span> <br></br>
              <span className="text2">Tìm cửa hàng gần nhất</span> <br></br>
              <span className="text3" style={{ color: "red" }}>
                Tìm cửa hàng gần nhấtGặp trực tiếp cửa hàng gần nhất (Zalo hoặc
                gọi điện)
              </span>
              <h2 style={{fontSize:"15px"}}>Phương thức thanh toán </h2>
              <div className="ATM">
                <img src={atm1} alt="" />
                <img src={atm2} alt="" />
                <img src={atm3} alt="" />
                <img src={atm4} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h1>
              <div className="text-footer-1">
                <span> Gọi mua hàng: 1800.2044 (8h00 - 22h00)</span><br></br>
                <span className="text1">
                  Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                </span>
                <br></br>
                <span className="text2">
                  Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                </span>
                <br></br>
                <span className="text3">Đối tác dịch vụ bảo hành</span>
                <span>Điện Thoại - Máy tính </span>
                <span className="text3">Trung tâm bảo hành uỷ quyền Apple</span>
                <div className="ATM">
                  <img
                    style={{ width: "90%", height: "35px" }}
                    src={atm5}
                    alt=""
                  />
                </div>
              </div>
            </h1>
          </Col>
          <Col lg={6}>
            <h1>
              <div className="text-footer-1">
                <span className="text1">Mua hàng và thanh toán Online</span>{" "}
                <br></br>
                <span className="text2">Mua hàng trả góp Online</span> <br></br>
                <span className="text2">Tra thông tin đơn hàng</span> <br></br>
                <span className="text2">Tra điểm Smember</span> <br></br>
                <span className="text2">Tra cứu hoá đơn VAT điện tử</span>{" "}
                <br></br>
                <span className="text2">
                  Trung tâm bảo hành chính hãng
                </span>
                <br></br>
                <span className="text2">
                  Quy định về việc sao lưu dữ liệu
                </span>
                <br></br>
                <span className="text3" style={{ color: "red" }}>
                  Dịch vụ bảo hành điện thoại
                </span>
              </div>
            </h1>
          </Col>
          <Col lg={6}>
            <h1>
              <div className="text-footer-1">
                <h3 style={{fontSize:"15px"}}>Tìm cửa hàng</h3>
                <span className="text1">Quy chế hoạt động</span> <br></br>
                <span className="text2">Chính sách Bảo hành</span> <br></br>
                <span className="text2">Liên hệ hợp tác kinh doanh</span>{" "}
                <br></br>
                <span className="text2">
                  Khách hàng doanh nghiệp (B2B)
                </span>
                <br></br>
                <span className="text2">Ưu đãi thanh toán</span> <br></br>
                <span className="text2" style={{ color: "red" }}>
                  Tuyển dụng
                </span>
                <br></br>
              </div>
            </h1>
          </Col>
        </Row>
        {/* footer2 */}
        
      </div>
      <Row gutter={[3, 24]}>
        <div className="box-footer-2">
          <Col lg={8}>
            <div className="text-footer-1">
              <span className="text1">Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11</span>
              <br></br>
              <span className="text2">Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</span> <br></br>
              <span className="text3" style={{ color: "red" }}> iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</span>
            </div>
          </Col>
          <Col lg={8}>
            
              <div className="text-footer-1">
               
                <span className="text1">
                Điện thoại iPhone Điện thoại Samsung Điện thoại Samsung A
                </span>
                <br></br>
                <span className="text2">
                Điện thoại OPPO Điện thoại Xiaomi Điện thoại Vivo Điện thoại Nokia
                </span>
                <br></br>
                <span>Samsung Fold 3 Samsung S22 Samsung A73 Samsung A53 </span>
               
              </div>
            
          </Col>
          <Col lg={8}>

           
              <div className="text-footer-1">
                <span className="text1">Laptop Laptop HP Laptop Dell Laptop Acer</span>{" "}
                <br></br>
                <span className="text2">Microsoft Surface Laptop Lenovo Laptop Asus</span> <br></br>
                <span className="text2">Máy tính để bàn Màn hình máy tính Camera Camera hành trình</span> <br></br>
              </div>
            
          </Col>
          
        </div>
        
      </Row>
      
    </div>
  );
};
export default Footer;
