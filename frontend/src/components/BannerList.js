import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerInfo from "./BannerInfo";
import '../style/bannerList.css';

const BannerList = () => {

    const [bannerList, setBannerList] = useState([1,2,3]);

    const displayBanner = bannerList.map((bannerInfo) => {
        return (
            <BannerInfo bannerInfo={bannerInfo}/>
        )
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={8}>
                        {displayBanner}
                    </Col>
                    <Col sm={12} lg={4}>
                        Hello
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerList;