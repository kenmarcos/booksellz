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

  .swiper-button-prev {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
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

  .swiper-button-prev {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
