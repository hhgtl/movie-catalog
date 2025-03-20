import { Button, styled } from "@mui/material";

type Props = {
  background?: string;
};

export const NavButton = styled(Button)<Props>(({ background, theme }) => ({
  fontWeight: "bold",
  textTransform: "capitalize",
  margin: "0 10px",
  padding: 0,
  color: theme.palette.secondary.main,
  fontSize: "16px",
  transition: ".4s",
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
}));
