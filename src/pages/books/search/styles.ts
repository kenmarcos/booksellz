import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const BooksSection = styled(M.Box)`
  .MuiTypography-h5 {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  .MuiPagination-root {
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;
