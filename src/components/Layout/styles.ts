import * as M from "@mui/material";
import { styled } from "styled-components";

export const Main = styled(M.Box)`
  min-height: 60vh;
  padding-top: ${({ theme }) => theme.spacing(18)};

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-top: ${({ theme }) => theme.spacing(10)};
  }
`;
