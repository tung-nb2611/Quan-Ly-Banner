import "../style/bannerInfo.css";
import { Container, Row, Col } from "react-bootstrap";
const BannerInfo = ({ bannerInfo }) => {
  const Confirmation = () => {
    console.log("really wanna delete ?");
  };

  return (
    <div className="banner-info">
      <Container>
        <Row>
          <Col xs={6} lg={3} xl={2}></Col>
          <Col xs={6} lg={3} xl={2}></Col>
          <Col xs={6} lg={3} xl={2}></Col>
          <Col xs={12} lg={3} xl={2}>
            <button onClick={Confirmation}>Delete</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerInfo;
