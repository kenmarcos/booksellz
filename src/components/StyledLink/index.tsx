import { ReactNode } from "react";
import { LinkProps } from "next/link";

import * as S from "./styles";

export interface StyledLinkProps extends LinkProps {
  children: ReactNode;
  color?: "primary" | "secondary";
}

const StyledLink = ({ children, ...rest }: StyledLinkProps) => {
  return <S.NextLink {...rest}>{children}</S.NextLink>;
};

export default StyledLink;
