import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./style";

function EventBanner() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img src="/main-event-banner_1.png" alt="banner" />
        </div>
        <div>
          <img src="/main-event-banner_2.png" alt="banner" />
        </div>
        <div>
          <img src="/main-event-banner_3.png" alt="banner" />
        </div>
      </Slider>
    </SliderWrapper>
  );
}

export default EventBanner;
