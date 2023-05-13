import styled from "styled-components";
import * as M from "@mui/material";

export const Toolbar = styled(M.Toolbar)`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-wrap: nowrap;
  }
`;

export const Search = styled("div")`
  display: flex;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.common.white};
  align-items: center;
  flex-grow: 1;
  order: 3;

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    order: 2;
  }
`;

export const InputBase = styled(M.InputBase)`
  width: 100%;

  & .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 2)};
    width: 100%;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const Navigation = styled(M.Box)`
  gap: ${({ theme }) => theme.spacing(3)};
  display: flex;
  order: 2;

  & > a {
    font-weight: bold;
    display: none;
  }

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.sm}px) {
    order: 3;
  }

  @media screen and (width >= 900px) {
    & > a {
      display: flex;
    }

    & > button {
      display: none;
    }
  }
`;
