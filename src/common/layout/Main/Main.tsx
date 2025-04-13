import { Container } from "@mui/material";
import React from "react";
import { ContentCarousel } from "../../components";

export const Main = () => {
  return (
    <Container component="main">
      <ContentCarousel filterType={"trending"} />
      {/*<section>Trends today & Trend week</section>*/}
      {/*<section>Latest trailers</section>*/}
      {/*<section>Popular </section>*/}
    </Container>
  );
};
