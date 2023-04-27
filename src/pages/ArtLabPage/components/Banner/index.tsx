import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./style";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img src="../public/artlab-banner_1.png" alt="banner" />
        </div>
        <div>
          <img src="../public/artlab-banner_2.png" alt="banner" />
        </div>
        <div>
          <img src="../public/artlab-banner_3.png" alt="banner" />
        </div>
      </Slider>
    </SliderWrapper>
  );
}

export default Banner;
