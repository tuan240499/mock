import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Divider } from "@mui/material";
import ServiceItemComponent from "../../components/ServiceComponent/ServiceComponent";
import HotDeals from "../../components/HotDealComponent/HotDeal";
import { Fragment } from "react";
import "./HomPage.css";
import offerStyle from "./HomePage.module.css";
import { Col, Row } from "react-bootstrap";
import SuggestionComponent from "../../components/SuggestionForU/SuggestionComponent";
import NewHotDeal from "../../components/NewHotDealComponent/NewHotDeal";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Fragment>
      <Slider {...settings}>
        <CardMedia
          component="img"
          height="100%"
          image="https://media.canifa.com/Simiconnector/BannerSlider/t/o/top_banner_desktop_2.webp"
          alt="Your Image Alt Text"
        />
        <CardMedia
          component="img"
          height="100%"
          image="https://media.canifa.com/Simiconnector/BannerSlider/c/h/chaothu-top-banner-desktop_2880x960.webp"
          alt="Your Image Alt Text"
        />
      </Slider>
      <ServiceItemComponent />
      <Divider sx={{ borderBottomWidth: 3 }} />
      <HotDeals />

      {/* <NewHotDeal /> */}

      {/* offer */}
      <div className={offerStyle.offer}>
        <div className={offerStyle.offer_title}>
          <h2>Ưu đãi độc quyền</h2>
        </div>
        <Row>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\offer1.webp"
              alt=""
            />
          </Col>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\offer2.webp"
              alt=""
            />
          </Col>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\offer3.webp"
              alt=""
            />
          </Col>
        </Row>
      </div>

      {/* Product 149k */}
      <div className={offerStyle.offer}>
        <div className={offerStyle.offer_title}>
          <h2>Sản phẩm dưới 149k</h2>
        </div>
        <Row>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\product149_1.webp"
              alt=""
            />
          </Col>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\product149_2.webp"
              alt=""
            />
          </Col>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\product149_3.webp"
              alt=""
            />
          </Col>
          <Col>
            <img
              className={offerStyle.offer_img}
              src="public\images\product149_4.webp"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <SuggestionComponent />
    </Fragment>
  );
};

export default HomePage;
