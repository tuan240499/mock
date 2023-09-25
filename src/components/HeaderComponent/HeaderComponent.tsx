import { Box, CardMedia } from "@mui/material";
import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypoCustom from "./TypoCustom";

const HeaderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Fragment>
      {/* <Box sx={{ position: "sticky", top: "0px", zIndex: "500  " }}>
        <CardMedia
          component="img"
          height="44px"
          image="https://media.canifa.com/popup/d/e/desktop-1920x48_3x.webp"
          alt="Your Image Alt Text"
        />
      </Box> */}
      <Box sx={{ height: "36px" }}>
        <Slider {...settings}>
          <TypoCustom>Thêm vào giỏ 599.000 ₫ để miễn phí vận chuyển</TypoCustom>
          <TypoCustom>
            ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày
          </TypoCustom>
        </Slider>
      </Box>
    </Fragment>
  );
};

export default HeaderComponent;
