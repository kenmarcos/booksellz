import * as M from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import * as S from "./styles";
import { CartItem } from "@/types/cart";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const totalPrice =
    Number(cartItem.book.price.replace("$", "")) * cartItem.quantity;

  return (
    <S.Wrapper>
      <M.CardMedia
        component="img"
        sx={{ width: 120 }}
        image={cartItem.book.image}
        alt={cartItem.book.title}
      />

      <S.Content>
        <M.Box>
          <M.Typography variant="h4">{cartItem.book.title}</M.Typography>
        </M.Box>

        <S.Quantity>
          <M.IconButton size="small">
            <RemoveOutlinedIcon />
          </M.IconButton>

          <M.Box component="span">{cartItem.quantity}</M.Box>

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
