import { useRouter } from "next/router";

import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { CartItem } from "@/types/cart";
import { BookCardProps } from ".";

type UseBookCardProps = BookCardProps;

const useBookCard = ({ isbn13, image, title, price }: UseBookCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const titleSlug = title.replace(/,/g, "").replace(/ /g, "-");

  const item: CartItem = {
    book: {
      image,
      isbn13,
      price,
      title,
    },
    quantity: 1,
    totalPrice: Number(price.slice(1)),
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleBuy = () => {
    dispatch(addToCart(item));

    router.push("/cart");
  };

  return {
    titleSlug,
    handleAddToCart,
    handleBuy,
  };
};

export default useBookCard;
