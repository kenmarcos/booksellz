import Link from "next/link";

import * as M from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import * as S from "./styles";

const OrderConfirmationTemplate = () => {
  return (
    <S.Wrapper>
      <S.MessageBox component="section">
        <M.Paper>
          <CheckCircleIcon color="success" />

          <M.Box textAlign="center">
            <M.Typography variant="h2">Your Order is Complete!</M.Typography>
            <M.Typography variant="h4">
              Thank you for your purchase.
            </M.Typography>
          </M.Box>

          <M.Typography textAlign="center" variant="h5">
            You will be receiving a confirmation e-mail with order details.
          </M.Typography>

          <M.Box>
            <M.Button
              LinkComponent={Link}
              href="/"
              variant="contained"
              size="large"
            >
              Continue Shopping
            </M.Button>
          </M.Box>
        </M.Paper>
      </S.MessageBox>
    </S.Wrapper>
  );
};

export default OrderConfirmationTemplate;
