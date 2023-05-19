import * as M from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import * as S from "./styles";
import { CartItem } from "@/types/cart";
import { useAppDispatch } from "@/store/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/formatting";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const totalPrice = Number(cartItem.book.price.slice(1)) * cartItem.quantity;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.book.isbn13));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(cartItem.book.isbn13));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(cartItem.book.isbn13));
  };

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
          <M.IconButton size="small" onClick={handleDecreaseQuantity}>
            <RemoveOutlinedIcon />
          </M.IconButton>

          <M.Box component="span">{cartItem.quantity}</M.Box>

          <M.IconButton size="small" onClick={handleIncreaseQuantity}>
            <AddOutlinedIcon />
          </M.IconButton>
        </S.Quantity>

        <M.Box>
          <M.Typography component="span" fontSize="1.25rem">
            {formatPrice(totalPrice)}
          </M.Typography>
        </M.Box>

        <M.Box>
          <M.IconButton
            edge="start"
            color="inherit"
            onClick={handleRemoveFromCart}
          >
            <DeleteForeverOutlinedIcon fontSize="large" />
          </M.IconButton>
        </M.Box>
      </S.Content>
    </S.Wrapper>
  );
};

export default CartItem;
