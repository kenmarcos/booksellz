import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    display: flex;
    align-items: center;
  }
`;

export const ImageSection = styled(M.Box)`
  width: 100%;

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    flex: 1;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const InfoSection = styled(M.Box)`
  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    flex: 1;
  }
`;

export const Information = styled(M.Box)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};

  div {
    flex: 1;
  }

  & + h2 {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ActionArea = styled(M.Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
`;
