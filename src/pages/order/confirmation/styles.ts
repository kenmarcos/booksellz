import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const MessageBox = styled(M.Box)`
  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    max-width: 70%;
    margin: 0 auto;
  }
  .MuiPaper-root {
    padding: ${({ theme }) => theme.spacing(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  .MuiPaper-root .MuiSvgIcon-root {
    font-size: 8rem;
  }
`;
