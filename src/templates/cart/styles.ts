import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
`;

export const ShoppingCart = styled(M.Box)`
  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 65%;
  }

  & .MuiPaper-root h2 {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Order = styled(M.Box)`
  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 35%;
  }

  & .MuiPaper-root {
    position: sticky;
    top: 100px;
  }

  & .MuiPaper-root h2 {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const OrderContent = styled(M.Stack)`
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const OrderData = styled(M.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MuiBox-root {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;
