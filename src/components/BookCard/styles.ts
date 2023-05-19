import styled from "styled-components";
import * as M from "@mui/material";

export const CardContent = styled(M.CardContent)`
  p {
    min-height: 48px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const CardActions = styled(M.CardActions)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-top: unset;
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  & > :not(:first-of-type) {
    margin-left: unset;
  }
`;
