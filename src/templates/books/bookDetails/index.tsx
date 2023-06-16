import Image from "next/image";

import * as M from "@mui/material";

import { BookDetails } from "@/types/books";
import * as S from "./styles";
import useBookDetails from "./useBookDetails";

export interface BookDetailsTemplateProps {
  bookDetails: BookDetails;
}

const BookDetailsTemplate = ({ bookDetails }: BookDetailsTemplateProps) => {
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

  const { handleAddToCart, handleBuy } = useBookDetails({
    title,
    image,
    isbn13,
    price,
  });

  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image
          src={image}
          width={800}
          height={800}
          quality={100}
          alt="book cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5OhHgAHcAJ5NURfKwAAAABJRU5ErkJggg=="
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

export default BookDetailsTemplate;
