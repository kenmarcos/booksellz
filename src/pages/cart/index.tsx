import * as M from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import * as S from "./styles";
import CartItem from "@/components/CartItem";

const cartItems = [
  {
    book: {
      title: "MongoDB Notes for Professionals",
      subtitle: "",
      isbn13: "1001650286196",
      price: "$20.00",
      image: "https://itbook.store/img/books/1001650286196.png",
      url: "https://itbook.store/books/1001650286196",
    },
    quantity: 3,
  },

  {
    book: {
      title: "Node.js, MongoDB and Angular Web Development, 2nd Edition",
      subtitle:
        "The definitive guide to using the MEAN stack to build web applications",
      isbn13: "9780134655536",
      price: "$33.16",
      image: "https://itbook.store/img/books/9780134655536.png",
      url: "https://itbook.store/books/9780134655536",
    },
    quantity: 1,
  },
  {
    book: {
      title: "The Definitive Guide to MongoDB",
      subtitle: "The NoSQL Database for Cloud and Desktop Computing",
      isbn13: "9781430230519",
      price: "$39.99",
      image: "https://itbook.store/img/books/9781430230519.png",
      url: "https://itbook.store/books/9781430230519",
    },
    quantity: 2,
  },
];

const Cart = () => {
  return (
    <S.Wrapper>
      <S.ShoppingCart>
        <M.Paper>
          <M.Typography variant="h2">Shopping Cart</M.Typography>
          <M.Divider />

          <M.Stack divider={<M.Divider />}>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.book.isbn13} {...cartItem} />
            ))}
          </M.Stack>
        </M.Paper>
      </S.ShoppingCart>

      <S.Order>
        <M.Paper>
          <M.Typography variant="h2">Order Summary</M.Typography>
          <M.Divider />

          <S.OrderContent spacing={3}>
            <S.OrderData>
              <M.Typography variant="h5" component="span">
                TOTAL ITEMS
              </M.Typography>
              <M.Typography component="span">6</M.Typography>
            </S.OrderData>

            <S.OrderData>
              <M.Typography variant="h5" component="span">
                DISTINCT ITEMS
              </M.Typography>
              <M.Typography component="span">3</M.Typography>
            </S.OrderData>

            <S.OrderData>
              <M.Typography variant="h5" component="span">
                SUBTOTAL
              </M.Typography>
              <M.Typography component="span">$100.00</M.Typography>
            </S.OrderData>

            <S.OrderData>
              <M.Box>
                <M.Typography variant="h5" component="span">
                  DISCOUNT
                </M.Typography>

                <M.Tooltip title="10% OFF" arrow>
                  <InfoOutlinedIcon fontSize="small" />
                </M.Tooltip>
              </M.Box>
              <M.Typography color="error" component="span">
                - $50.00
              </M.Typography>
            </S.OrderData>

            <M.Divider />

            <S.OrderData>
              <M.Typography variant="h4" component="span">
                TOTAL COST
              </M.Typography>
              <M.Typography component="span" fontSize="1.25rem">
                $500.00
              </M.Typography>
            </S.OrderData>

            <M.Button variant="contained" size="large">
              Checkout
            </M.Button>
          </S.OrderContent>
        </M.Paper>
      </S.Order>
    </S.Wrapper>
  );
};

export default Cart;
