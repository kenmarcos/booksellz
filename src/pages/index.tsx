import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";

import * as M from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import bannerBook from "/public/images/banner-book.png";
import bannerReleases from "/public/images/banner-releases.png";
import bannerDiscount from "/public/images/banner-discount.png";
import { api } from "@/services/api";
import { Book } from "@/types/books";
import StyledLink from "@/components/StyledLink";
import { useAppSelector } from "@/store/hooks";

interface HomeProps {
  bookReleases: Book[];
}

export default function Home({ bookReleases }: HomeProps) {
  const cart = useAppSelector((store) => store.cart);

  return (
    <S.Wrapper>
      <S.MainCarousel>
        <Swiper
          navigation
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          <SwiperSlide>
            <Image
              src={bannerDiscount}
              alt="banner discount"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUlJauBwABdADQDG2nxgAAAABJRU5ErkJggg=="
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/books/releases">
              <Image
                src={bannerReleases}
                alt="banner releases"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUlJauBwABdADQDG2nxgAAAABJRU5ErkJggg=="
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/books/Data-Visualization-with-Python-and-JavaScript-2nd-Edition/9781098111878">
              <Image
                src={bannerBook}
                alt="banner book"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUlJauBwABdADQDG2nxgAAAABJRU5ErkJggg=="
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </S.MainCarousel>

      <S.CardCarousel component="section">
        <M.Box>
          <M.Typography variant="h3">New Releases</M.Typography>
          <StyledLink href="books/releases">View all</StyledLink>
        </M.Box>

        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            600: {
              slidesPerView: 3.5,
            },
            900: {
              slidesPerView: 4.5,
            },
          }}
        >
          {bookReleases.map((book) => (
            <SwiperSlide key={book.isbn13}>
              <BookCard
                isbn13={book.isbn13}
                image={book.image}
                title={book.title}
                price={book.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CardCarousel>
    </S.Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/new");

  const data = response.data.books;

  const bookReleases = data.slice(0, 8);

  return {
    props: {
      bookReleases,
    },
    revalidate: 60 * 60 * 24 * 5,
  };
};
