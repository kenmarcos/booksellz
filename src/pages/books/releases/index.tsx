import Image from "next/image";
import { GetStaticProps } from "next";

import * as M from "@mui/material";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import bannerReleases from "/public/images/banner-releases.png";
import { api } from "@/services/api";
import { Book } from "@/types/books";

interface ReleaseProps {
  bookReleases: Book[];
}

const Releases = ({ bookReleases }: ReleaseProps) => {
  return (
    <S.Wrapper>
      <S.Banner>
        <Image src={bannerReleases} alt="banner releases" />
      </S.Banner>

      <M.Box>
        <M.Grid container spacing={2}>
          {bookReleases.map((book) => (
            <M.Grid key={book.isbn13} item xs={12} sm={6} md={3}>
              <BookCard
                isbn13={book.isbn13}
                image={book.image}
                title={book.title}
                price={book.price}
              />
            </M.Grid>
          ))}
        </M.Grid>
      </M.Box>
    </S.Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/new");

  const bookReleases = response.data.books;

  return {
    props: {
      bookReleases,
    },
    revalidate: 60 * 60 * 24 * 5,
  };
};

export default Releases;
