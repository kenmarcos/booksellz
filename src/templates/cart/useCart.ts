import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetCart } from "@/store/slices/cartSlice";

const useCart = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
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

  const handleCheckout = () => {
    dispatch(resetCart());

    router.push("/order/confirmation");
  };

  return {
    cart,
    tooltipText,
    handleCheckout,
  };
};

export default useCart;
