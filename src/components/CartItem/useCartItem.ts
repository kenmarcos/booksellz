import { useAppDispatch } from "@/store/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { CartItem } from "@/types/cart";

const useCartItem = (cartItem: CartItem) => {
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

  return {
    totalPrice,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
};

export default useCartItem;
