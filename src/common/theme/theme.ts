import { createTheme } from "@mui/material";

export const getTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#F9255D",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF7A",
      },
      background: {
        default: "#100E19",
      },
    },
  });
};
