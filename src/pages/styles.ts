import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const CardCarousel = styled(M.Box)`
  .MuiBox-root {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    display: flex;
    justify-content: space-between;
  }

  .swiper-wrapper {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

export const MainCarousel = styled(M.Box)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    text-align: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
