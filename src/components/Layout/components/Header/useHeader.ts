import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/store/hooks";

const useHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const cart = useAppSelector((store) => store.cart);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue = searchInputRef.current?.value;

    if (searchValue) {
      router.push({
        pathname: "/books/search",
        query: { keyword: searchValue },
      });

      const formElement = event.target as HTMLFormElement;
      formElement.reset();
      searchInputRef.current.blur();
    }
  };

  return {
    open,
    setOpen,
    searchInputRef,
    cart,
    handleSubmit,
  };
};

export default useHeader;
