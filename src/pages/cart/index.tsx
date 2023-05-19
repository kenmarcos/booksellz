import Link from "next/link";

import * as M from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

import * as S from "./styles";
import CartItem from "@/components/CartItem";
import { useAppSelector } from "@/store/hooks";
import { formatPrice } from "@/utils/formatting";
import NoContentMessage from "@/components/NoContentMessage";

const Cart = () => {
  const cart = useAppSelector((store) => store.cart);

  let tooltipText = "";
  if (cart.distinctItems === 2) {
    tooltipText = "5% OFF";
  } else if (cart.distinctItems === 3) {
    tooltipText = "10% OFF";
  } else if (cart.distinctItems === 4) {
    tooltipText = "20% OFF";
  } else if (cart.distinctItems >= 5) {
    tooltipText = "25% OFF";
  }

  return (
    <S.Wrapper>
      <S.ShoppingCart>
        <M.Paper>
          <M.Typography variant="h2">Shopping Cart</M.Typography>
          <M.Divider />

          {!cart.cartItems.length && (
            <NoContentMessage
              icon={<ProductionQuantityLimitsOutlinedIcon />}
              mainMessage="Your Cart is Empty"
              subMessage="Looks like you haven't added anything to your cart yet"
              button={
                <M.Button LinkComponent={Link} href="/" variant="contained">
                  Return to Shop
                </M.Button>
              }
            />
          )}

          {!!cart.cartItems.length && (
            <M.Stack divider={<M.Divider />}>
              {cart.cartItems.map((cartItem) => (
                <CartItem key={cartItem.book.isbn13} cartItem={cartItem} />
              ))}
            </M.Stack>
          )}
        </M.Paper>
      </S.ShoppingCart>

      {!!cart.cartItems.length && (
        <S.Order>
          <M.Paper>
            <M.Typography variant="h2">Order Summary</M.Typography>
            <M.Divider />

            <S.OrderContent spacing={3}>
              <S.OrderData>
                <M.Typography variant="h5" component="span">
                  TOTAL ITEMS
                </M.Typography>
                <M.Typography component="span">{cart.totalItems}</M.Typography>
              </S.OrderData>

              <S.OrderData>
                <M.Typography variant="h5" component="span">
                  DISTINCT ITEMS
                </M.Typography>
                <M.Typography component="span">
                  {cart.distinctItems}
                </M.Typography>
              </S.OrderData>

              <S.OrderData>
                <M.Typography variant="h5" component="span">
                  SUBTOTAL
                </M.Typography>
                <M.Typography component="span">
                  {formatPrice(cart.subtotal)}
                </M.Typography>
              </S.OrderData>

              {tooltipText && (
                <S.OrderData>
                  <M.Box>
                    <M.Typography variant="h5" component="span">
                      DISCOUNT
                    </M.Typography>

                    <M.Tooltip title={tooltipText} arrow>
                      <InfoOutlinedIcon fontSize="small" />
                    </M.Tooltip>
                  </M.Box>
                  <M.Typography color="error" component="span">
                    {formatPrice(cart.discount)}
                  </M.Typography>
                </S.OrderData>
              )}

              <M.Divider />

              <S.OrderData>
                <M.Typography variant="h4" component="span">
                  TOTAL COST
                </M.Typography>
                <M.Typography component="span" fontSize="1.25rem">
                  {formatPrice(cart.totalCost)}
                </M.Typography>
              </S.OrderData>

              <M.Button variant="contained" size="large">
                Checkout
              </M.Button>
            </S.OrderContent>
          </M.Paper>
        </S.Order>
      )}
    </S.Wrapper>
  );
};

export default Cart;
