import { AppBar, Button, Container, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { containerSx } from "../../styles";
import { NavButton } from "../NavButton/NavButton";
import { Link } from "react-router-dom";

export const Header = () => {
  const navList = ["home", "movies", "serials", "cartoons"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
          <div>
            {navList.map((itemItem) => (
              <NavButton disableRipple>{itemItem}</NavButton>
            ))}
          </div>
          <div>
            <NavButton startIcon={<SearchIcon />}>search</NavButton>
            <NavButton href="/" startIcon={<PermIdentityIcon />}>
              search
            </NavButton>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
