import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Banner = styled(M.Box)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  img {
    width: 100%;
    height: 100%;
  }
`;
