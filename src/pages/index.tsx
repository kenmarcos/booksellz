import * as M from "@mui/material";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import * as S from "./styles";
import BookCard from "@/components/BookCard";

const books = [
  {
    title: "Snowflake: The Definitive Guide",
    subtitle:
      "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
    isbn13: "9781098103828",
    price: "$58.90",
    image: "https://itbook.store/img/books/9781098103828.png",
    url: "https://itbook.store/books/9781098103828",
  },
  {
    title: "Python for Data Analysis, 3rd Edition",
    subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",
    isbn13: "9781098104030",
    price: "$37.49",
    image: "https://itbook.store/img/books/9781098104030.png",
    url: "https://itbook.store/books/9781098104030",
  },
  {
    title: "Reliable Machine Learning",
    subtitle: "Applying SRE Principles to ML in Production",
    isbn13: "9781098106225",
    price: "$43.99",
    image: "https://itbook.store/img/books/9781098106225.png",
    url: "https://itbook.store/books/9781098106225",
  },
  {
    title: "Data Visualization with Python and JavaScript, 2nd Edition",
    subtitle: "Scrape, Clean, Explore, and Transform Your Data",
    isbn13: "9781098111878",
    price: "$60.99",
    image: "https://itbook.store/img/books/9781098111878.png",
    url: "https://itbook.store/books/9781098111878",
  },
  {
    title: "Learning Microsoft Power BI",
    subtitle: "Transforming Data into Insights",
    isbn13: "9781098112844",
    price: "$41.99",
    image: "https://itbook.store/img/books/9781098112844.png",
    url: "https://itbook.store/books/9781098112844",
  },
  {
    title: "C++ Software Design",
    subtitle: "Design Principles and Patterns for High-Quality Software",
    isbn13: "9781098113162",
    price: "$43.99",
    image: "https://itbook.store/img/books/9781098113162.png",
    url: "https://itbook.store/books/9781098113162",
  },
  {
    title: "Terraform: Up and Running, 3rd Edition",
    subtitle: "Writing Infrastructure as Code",
    isbn13: "9781098116743",
    price: "$46.99",
    image: "https://itbook.store/img/books/9781098116743.png",
    url: "https://itbook.store/books/9781098116743",
  },
  {
    title: "Flutter and Dart Cookbook",
    subtitle: "Developing Full-Stack Applications for the Cloud",
    isbn13: "9781098119515",
    price: "$50.52",
    image: "https://itbook.store/img/books/9781098119515.png",
    url: "https://itbook.store/books/9781098119515",
  },
];

export default function Home() {
  return (
    <S.Wrapper>
      <S.CardCarousel component="section">
        <M.Typography variant="h3">New Releases</M.Typography>

        <Swiper
          navigation
          modules={[Navigation, Scrollbar]}
          spaceBetween={16}
          slidesPerView={1.5}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            600: {
              slidesPerView: 3.5,
            },
            900: {
              slidesPerView: 4.5,
            },
          }}
        >
          {books.map((book) => (
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
