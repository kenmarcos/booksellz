import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import * as M from "@mui/material";

import * as S from "./styles";
import { api } from "@/services/api";
import { BookDetails } from "@/types/books";

interface BookDetailsProps {
  bookDetails: BookDetails;
}

const BookDetails = ({ bookDetails }: BookDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image
          src={bookDetails.image}
          width={800}
          height={800}
          quality={100}
          alt="book cover"
        />
      </S.ImageSection>

      <S.InfoSection>
        <M.Typography variant="h2">{bookDetails.title}</M.Typography>

        <M.Typography variant="h3">{bookDetails.subtitle}</M.Typography>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Description</M.Typography>
            <M.Typography>{bookDetails.desc}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Author</M.Typography>
            <M.Typography>{bookDetails.authors}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">ISBN-13</M.Typography>
            <M.Typography>{bookDetails.isbn13}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Publisher</M.Typography>
            <M.Typography>{bookDetails.publisher}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">Year</M.Typography>
            <M.Typography>{bookDetails.year}</M.Typography>
          </M.Box>
        </S.Information>

        <M.Typography variant="h2">{bookDetails.price}</M.Typography>

        <S.ActionArea>
          <M.Button fullWidth size="large" variant="contained">
            Buy Now
          </M.Button>

          <M.Button fullWidth size="large" variant="outlined">
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
