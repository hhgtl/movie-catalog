import policeImg from "../../../assets/police.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import { Navigation } from "swiper/modules";
const slides = [
  {
    id: 1,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: policeImg,
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: policeImg,
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: policeImg,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: policeImg,
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: policeImg,
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    subtitle: "Contact us for your next big project",
    image: policeImg,
  },
  {
    id: 7,
    title: "Lorem Ipsum",
    subtitle: "Contact us for your next big project",
    image: policeImg,
  },
];

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      navigation={true}
      modules={[Navigation]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <div className="slider-wrapper">
            <img src={slide.image} className="slider-image" />
            <div className="slider-subText">
              <h2 className="slider-title">{slide.title}</h2>
              <p className="slider-desc">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
