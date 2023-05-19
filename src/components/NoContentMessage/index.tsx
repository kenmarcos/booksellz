import { ReactNode } from "react";

import * as M from "@mui/material";

import * as S from "./styles";

interface NoContentProps {
  icon?: ReactNode;
  mainMessage: string;
  subMessage?: string;
  button?: ReactNode;
}

const NoContentMessage = ({
  icon,
  mainMessage = "Not Found",
  subMessage,
  button,
}: NoContentProps) => {
  return (
    <S.Wrapper>
      {!!icon && icon}

      <M.Box textAlign="center">
        <M.Typography variant="h3">{mainMessage}</M.Typography>

        {!!subMessage && (
          <M.Typography variant="body2">{subMessage}</M.Typography>
        )}
      </M.Box>

      {!!button && <M.Box>{button}</M.Box>}
    </S.Wrapper>
  );
};

export default NoContentMessage;
