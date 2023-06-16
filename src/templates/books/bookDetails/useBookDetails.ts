import { useRouter } from "next/router";

import { useAppDispatch } from "@/store/hooks";
import { CartItem } from "@/types/cart";
import { Book } from "@/types/books";
import { addToCart } from "@/store/slices/cartSlice";

type UseBookDetailsProps = Omit<Book, "subtitle" | "url">;

const useBookDetails = ({
  image,
  isbn13,
  price,
  title,
}: UseBookDetailsProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

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
    handleAddToCart,
    handleBuy,
  };
};

export default useBookDetails;
