import Image from "next/image";
import { GetStaticProps } from "next";

import * as M from "@mui/material";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import bannerReleases from "/public/images/banner-releases.png";
import { api } from "@/services/api";
import { Book } from "@/types/books";

export interface ReleasesTemplateProps {
  bookReleases: Book[];
}

const ReleasesTemplate = ({ bookReleases }: ReleasesTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Banner>
        <Image
          src={bannerReleases}
          alt="banner releases"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5OhHgAHcAJ5NURfKwAAAABJRU5ErkJggg=="
        />
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

export default ReleasesTemplate;
