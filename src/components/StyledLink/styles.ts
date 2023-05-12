import Link from "next/link";
import styled from "styled-components";
import { StyledLinkProps } from ".";

export const NextLink = styled(Link)<Omit<StyledLinkProps, "children">>`
  color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.text.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;
