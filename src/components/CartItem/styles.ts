import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Card)`
  border-radius: unset;
  display: flex;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const Content = styled(M.CardContent)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */

    .MuiBox-root {
      &:not(:first-child) {
        text-align: center;
      }

      &:first-child,
      &:nth-child(2) {
        width: 35%;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 15%;
      }
    }
  }

  h4 {
    width: 90%;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const Quantity = styled(M.Box)`
  button {
    border: 1px solid ${({ theme }) => theme.palette.text.primary};
  }

  button:disabled {
    border-color: ${({ theme }) => theme.palette.text.secondary};
  }

  .MuiBox-root {
    display: inline-block;
    padding: 0 8px;
  }

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    .MuiBox-root {
      padding: unset;
    }
  }
`;
