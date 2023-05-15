import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const CardCarousel = styled(M.Box)`
  .MuiTypography-h3 {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  .swiper-wrapper {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;
