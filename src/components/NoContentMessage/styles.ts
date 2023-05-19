import styled from "styled-components";
import * as M from "@mui/material";

export const Wrapper = styled(M.Box)`
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  .MuiSvgIcon-root {
    font-size: 5rem;
  }
`;
