import { SxProps } from "@mui/material";
import { getTheme } from "../theme";

const theme = getTheme();

export const filterButtonGroupSx: SxProps = {
  marginBottom: "15px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "30px",
  padding: "4px",
};

export const filterButtonSx: SxProps = {
  textTransform: "capitalize",
  padding: "6px 16px",
  fontWeight: 500,
  fontSize: "14px",
  color: theme.palette.primary.contrastText,
  borderRadius: "30px !important",
  transition: "all 0.3s ease-in-out",
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  "&:hover": {
    color: theme.palette.primary.main,
  },
};
