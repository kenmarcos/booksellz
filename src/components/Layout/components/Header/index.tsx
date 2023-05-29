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
import useHeader from "./useHeader";

const Header = () => {
  const { open, setOpen, searchInputRef, cart, handleSubmit } = useHeader();

  return (
    <M.AppBar>
      <M.Container>
        <S.Toolbar>
          <Link href="/">
            <Image
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5OhHgAHcAJ5NURfKwAAAABJRU5ErkJggg=="
              src={logo}
              width={200}
              alt="booksellz logo"
              quality={100}
            />
          </Link>

          <S.SearchForm onSubmit={handleSubmit}>
            <S.InputBase
              inputRef={searchInputRef}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <M.Button type="submit">
              <SearchIcon />
            </M.Button>
          </S.SearchForm>

          <S.Navigation>
            <StyledLink href="#" color="secondary">
              <AccountBoxIcon />
              Account
            </StyledLink>

            <StyledLink href="/cart" color="secondary">
              <M.Badge badgeContent={cart.totalItems} color="secondary">
                <ShoppingCartOutlinedIcon />
              </M.Badge>
              Cart
            </StyledLink>

            <M.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </M.IconButton>

            <S.Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <M.Box>
                <M.List>
                  <M.ListItem>
                    <M.ListItemButton>
                      <M.ListItemIcon>
                        <AccountBoxIcon />
                      </M.ListItemIcon>
                      <M.ListItemText primary="Account" />
                    </M.ListItemButton>
                  </M.ListItem>

                  <M.ListItem>
                    <M.ListItemButton
                      LinkComponent={Link}
                      href="/cart"
                      onClick={() => setOpen(false)}
                    >
                      <M.ListItemIcon>
                        <M.Badge badgeContent={cart.totalItems} color="primary">
                          <ShoppingCartOutlinedIcon />
                        </M.Badge>
                      </M.ListItemIcon>
                      <M.ListItemText primary="Cart" />
                    </M.ListItemButton>
                  </M.ListItem>
                </M.List>
              </M.Box>
            </S.Drawer>
          </S.Navigation>
        </S.Toolbar>
      </M.Container>
    </M.AppBar>
  );
};

export default Header;
