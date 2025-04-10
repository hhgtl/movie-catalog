import React from "react";
import "./App.module.css";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "../common/theme";
import { Footer, Header, Main } from "../common/layout";
import { Carousel } from "../common/components";

function App() {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Header />
        <Carousel />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
