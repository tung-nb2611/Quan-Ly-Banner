import "../../style/bannerInfo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/banners/";

const BannerInfo = ({ bannerInfo, bannerList }) => {

  // 'delete' has to remove the item from bannerList too so that 
  // the web will change immediately without having to reload the page
  // as {bannerList} contains the list of banner the 'BannerList' component has

  const deleteConfirmation = () => {
    const confirm = window.confirm(
      "Do you want to remove this banner?"
    )
    if(confirm === true){
      axios.delete(BASE_URL+bannerInfo.id).then(() =>
        console.log('Delete successful'));
    }
  };

  const updateBanner = () => {
      console.log("Update");
  }

  return (
    <div className="banner-info">
      <Container>
        <Row>
          <Col xs={3} lg={3} xl={1}>
            <p>Id</p>
            <p>{bannerInfo.code}</p>
          </Col>
          <Col xs={3} lg={3} xl={2}>
            <p>Name</p>
            <p>{bannerInfo.name}</p>
          </Col>
          <Col xs={3} lg={3} xl={1}>
            <p>State</p>  
            <p>{bannerInfo.state}</p>
          </Col>
          <Col xs={12} lg={12} xl={5} className="image-container">
            <Image
              src="https://mdbootstrap.com/img/new/slides/041.webp"
            />
          </Col>
          <Col xs={3} lg={3} xl={2} className="button-choice">
            <button onClick={deleteConfirmation}>Delete</button>
            <button onClick={updateBanner}>Update</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerInfo;
