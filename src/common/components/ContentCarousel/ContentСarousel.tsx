import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Scrollbar } from "swiper/modules";
import testImg from "../../../assets/testContent.webp";
import s from "./contentСarousel.module.css";
import "swiper/css/scrollbar";
import { useState } from "react";
import { filterButtonGroupSx, filterButtonSx } from "../../styles";

const mockImages: any = [
  testImg,
  testImg,
  testImg,
  testImg,
  testImg,
  testImg,
  testImg,
  testImg,
  testImg,
];

const trendingTypes = ["today", "thisWeek"];
const popularTypes = ["streaming", "onTV", "forRent", "inTheaters"];
const trending = [
  { title: "today", key: "today" },
  { title: "this week", key: "thisWeek" },
];

type Props = {
  filterType: "trending" | "popular";
};

export const ContentCarousel = ({ filterType }: Props) => {
  const [alignment, setAlignment] = useState("today");

  const sliders = mockImages.map((img: any, i: number) => (
    <SwiperSlide key={i} className={s.swiperSlide}>
      <img className={s.swiperImage} src={img} alt="" />
    </SwiperSlide>
  ));

  let toggleButtons;

  if (filterType === "trending") {
    toggleButtons = trending.map((item) => (
      <ToggleButton key={item.key} sx={filterButtonSx} value={item.key}>
        {item.title}
      </ToggleButton>
    ));
  }

  const filterChangeHandler = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== alignment) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Container component={"section"} className={s.contentCoroulsel_wrapper}>
      <ToggleButtonGroup
        onChange={filterChangeHandler}
        value={alignment}
        exclusive
        aria-label="Platform"
        sx={filterButtonGroupSx}
      >
        {toggleButtons}
      </ToggleButtonGroup>
      <Swiper
        slidesPerView={6.8}
        spaceBetween={10}
        freeMode={true}
        simulateTouch={false}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          draggable: true,
          dragClass: s.contentScrollbar,
        }}
        modules={[FreeMode, Pagination, Scrollbar]}
        className={s.contentSlider}
      >
        {sliders}
      </Swiper>
    </Container>
  );
};
