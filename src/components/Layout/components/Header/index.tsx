import Link from "next/link";
import Image from "next/image";

import * as M from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "/public/logo.svg";
import * as S from "./styles";
import StyledLink from "../../../StyledLink";

const Header = () => {
  return (
    <M.AppBar>
      <M.Container>
        <S.Toolbar>
          <Link href="/">
            <Image priority src={logo} width={200} alt="booksellz logo" />
          </Link>

          <S.Search>
            <S.InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <M.Button>
              <SearchIcon />
            </M.Button>
          </S.Search>

          <S.Navigation>
            <StyledLink href="#" color="secondary">
              <AccountBoxIcon />
              Account
            </StyledLink>

            <StyledLink href="/cart" color="secondary">
              <ShoppingCartOutlinedIcon />
              Cart
            </StyledLink>

            <M.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </M.IconButton>
          </S.Navigation>
        </S.Toolbar>
      </M.Container>
    </M.AppBar>
  );
};

export default Header;
