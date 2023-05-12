import { ReactNode } from "react";

import * as S from "./styles";
import { LinkProps } from "next/link";

export interface StyledLinkProps extends LinkProps {
  children: ReactNode;
  color?: "primary" | "secondary";
}

const StyledLink = ({ children, ...rest }: StyledLinkProps) => {
  return <S.NextLink {...rest}>{children}</S.NextLink>;
};

export default StyledLink;
