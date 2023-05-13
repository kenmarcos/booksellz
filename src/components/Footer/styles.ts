import * as M from "@mui/material";
import styled from "styled-components";

interface SectionProps {
  order?: number;
}

export const Wrapper = styled(M.Box)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  /* color: ${({ theme }) => theme.palette.common.white}; */
  padding: ${({ theme }) => theme.spacing(5, 0)};

  & .MuiContainer-root {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(8)};

    @media screen and (width >= ${({ theme }) =>
        theme.breakpoints.values.md}px) {
      flex-direction: row;
      gap: unset;
    }
  }
`;

export const Section = styled(M.Box)<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  order: unset;

  & > ul > li {
    justify-content: center;
  }

  @media screen and (width >= ${({ theme }) => theme.breakpoints.values.md}px) {
    order: ${(props) => props.order};
  }
`;

export const SocialMedia = styled(M.Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;
