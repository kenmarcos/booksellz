import Image from "next/image";

import * as M from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

import * as S from "./styles";
import StyledLink from "../../../StyledLink";
import logoFooter from "/public/logo-variation.svg";

const institutionalLinks = [
  "About Us",
  "Blog",
  "Investor Relations",
  "Careers",
];

const contactLinks = ["Call Center", "Contact Us"];

const serviceLinks = ["Privacy Police", "Terms & Conditions", "Stores"];

const Footer = () => {
  return (
    <S.Wrapper component="footer">
      <M.Container>
        <S.Section order={2}>
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5OhHgAHcAJ5NURfKwAAAABJRU5ErkJggg=="
            src={logoFooter}
            width={240}
            alt="booksellz logo"
            quality={100}
          />

          <S.SocialMedia>
            <StyledLink href="#">
              <InstagramIcon fontSize="large" color="secondary" />
            </StyledLink>

            <StyledLink href="#">
              <TwitterIcon fontSize="large" color="secondary" />
            </StyledLink>

            <StyledLink href="#">
              <YouTubeIcon fontSize="large" color="secondary" />
            </StyledLink>

            <StyledLink href="#">
              <FacebookIcon fontSize="large" color="secondary" />
            </StyledLink>
          </S.SocialMedia>

          <M.List>
            {contactLinks.map((linkName) => (
              <M.ListItem key={linkName}>
                <StyledLink href="#" color="secondary">
                  {linkName}
                </StyledLink>
              </M.ListItem>
            ))}
          </M.List>
        </S.Section>

        <S.Section order={1}>
          <M.Typography variant="h4" color="secondary">
            INSTITUTIONAL
          </M.Typography>

          <M.List>
            {institutionalLinks.map((linkName) => (
              <M.ListItem key={linkName}>
                <StyledLink href="#" color="secondary">
                  {linkName}
                </StyledLink>
              </M.ListItem>
            ))}
          </M.List>
        </S.Section>

        <S.Section order={3}>
          <M.Typography variant="h4" color="secondary">
            SERVICE
          </M.Typography>

          <M.List>
            {serviceLinks.map((linkName) => (
              <M.ListItem key={linkName}>
                <StyledLink href="#" color="secondary">
                  {linkName}
                </StyledLink>
              </M.ListItem>
            ))}
          </M.List>
        </S.Section>
      </M.Container>
    </S.Wrapper>
  );
};

export default Footer;
