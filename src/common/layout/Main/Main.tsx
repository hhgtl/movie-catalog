import { Container } from "@mui/material";
import React from "react";

export const Main = () => {
  return (
    <Container
      component="main"
      // sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <section>Trends today & Trend week</section>
      <section>Latest trailers</section>
      <section>Popular </section>
    </Container>
  );
};
