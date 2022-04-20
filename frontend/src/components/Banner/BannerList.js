import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerInfo from "./BannerInfo";
import "../../style/bannerList.css";
import axios from "axios";
import PaginateList from "../PaginateList";

const BASE_URL = "http://localhost:8080/api/banners/page/";

const BannerList = () => {
  const [bannerList, setBannerList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Ở đây dữ liệu nhận được từ API call đã được phân theo trang sẵn ở phần backend, chỉ cần lấy thông tin số trang
  // và trang hiện tại từ dữ liệu nhận về là được
   
  useEffect(() => {
    axios.get(BASE_URL + currentPage).then((response) => {

      // Lấy thông tin banner
      const data = response.data.content;
      // Lấy thông tin tổng số trang 
      const pageNum = response.data.totalPages;

      setBannerList(data);
      setPageNumber(pageNum);

    }); 
  }, [currentPage]);   

  const displayBanner = bannerList.map((bannerInfo) => {
    return <BannerInfo bannerInfo={bannerInfo} key={bannerInfo.id} bannerList={bannerList}/>;
  });
  
  return (
    <div className="banner-list">
      <Container >
        <Row>
          <Col sm={12} lg={10}>
            {displayBanner}
          </Col>
        </Row>
        <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber}/>
      </Container>
    </div>
  );
};

export default BannerList;
