import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import * as M from "@mui/material";

import * as S from "./styles";
import { api } from "@/services/api";
import { BookDetails } from "@/types/books";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { CartItem } from "@/types/cart";

interface BookDetailsProps {
  bookDetails: BookDetails;
}

const BookDetails = ({ bookDetails }: BookDetailsProps) => {
  const {
    image,
    isbn13,
    price,
    title,
    subtitle,
    desc,
    authors,
    publisher,
    year,
  } = bookDetails;
  const router = useRouter();
  const dispatch = useAppDispatch();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image
          src={image}
          width={800}
          height={800}
          quality={100}
          alt="book cover"
        />
      </S.ImageSection>

      <S.InfoSection>
        <M.Typography variant="h2">{title}</M.Typography>

        <M.Typography variant="h3">{subtitle}</M.Typography>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Description</M.Typography>
            <M.Typography>{desc}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Author</M.Typography>
            <M.Typography>{authors}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">ISBN-13</M.Typography>
            <M.Typography>{isbn13}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Publisher</M.Typography>
            <M.Typography>{publisher}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">Year</M.Typography>
            <M.Typography>{year}</M.Typography>
          </M.Box>
        </S.Information>

        <M.Typography variant="h2">{price}</M.Typography>

        <S.ActionArea>
          <M.Button
            fullWidth
            size="large"
            variant="contained"
            onClick={handleBuy}
          >
            Buy Now
          </M.Button>

          <M.Button
            fullWidth
            size="large"
            variant="outlined"
            onClick={handleAddToCart}
          >
            Add To Cart
          </M.Button>
        </S.ActionArea>
      </S.InfoSection>
    </S.Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const bookISBN13 = context.params?.bookISBN13;

  const response = await api.get(`/books/${bookISBN13}`);

  const bookDetails = response.data;

  return {
    props: {
      bookDetails,
    },
  };
};

export default BookDetails;
