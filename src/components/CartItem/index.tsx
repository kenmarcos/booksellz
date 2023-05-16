import * as M from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import * as S from "./styles";

interface CartItemProps {
  book: {
    title: string;
    subtitle?: string;
    isbn13?: string;
    price: string;
    image: string;
    url?: string;
  };
  quantity: number;
}

const CartItem = ({ book, quantity }: CartItemProps) => {
  const totalPrice = Number(book.price.replace("$", "")) * quantity;

  return (
    <S.Wrapper>
      <M.CardMedia
        component="img"
        sx={{ width: 120 }}
        image={book.image}
        alt={book.title}
      />

      <S.Content>
        <M.Box>
          <M.Typography variant="h4">{book.title}</M.Typography>
        </M.Box>

        <S.Quantity>
          <M.IconButton size="small">
            <RemoveOutlinedIcon />
          </M.IconButton>

          <M.Box component="span">50</M.Box>

          <M.IconButton size="small">
            <AddOutlinedIcon />
          </M.IconButton>
        </S.Quantity>

        <M.Box>
          <M.Typography component="span" fontSize="1.25rem">
            ${totalPrice}
          </M.Typography>
        </M.Box>

        <M.Box>
          <M.IconButton edge="start" color="inherit">
            <DeleteForeverOutlinedIcon fontSize="large" />
          </M.IconButton>
        </M.Box>
      </S.Content>
    </S.Wrapper>
  );
};

export default CartItem;
