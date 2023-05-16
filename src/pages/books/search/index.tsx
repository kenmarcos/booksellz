import * as M from "@mui/material";

import * as S from "./styles";
import BookCard from "@/components/BookCard";

const books = [
  {
    title: "MongoDB in Action, 2nd Edition",
    subtitle: "Covers MongoDB version 3.0",
    isbn13: "9781617291609",
    price: "$19.99",
    image: "https://itbook.store/img/books/9781617291609.png",
    url: "https://itbook.store/books/9781617291609",
  },
  {
    title: "Practical MongoDB",
    subtitle: "Architecting, Developing, and Administering MongoDB",
    isbn13: "9781484206485",
    price: "$41.65",
    image: "https://itbook.store/img/books/9781484206485.png",
    url: "https://itbook.store/books/9781484206485",
  },
  {
    title: "The Definitive Guide to MongoDB, 3rd Edition",
    subtitle: "A complete guide to dealing with Big Data using MongoDB",
    isbn13: "9781484211830",
    price: "$49.99",
    image: "https://itbook.store/img/books/9781484211830.png",
    url: "https://itbook.store/books/9781484211830",
  },
  {
    title: "MongoDB Performance Tuning",
    subtitle: "Optimizing MongoDB Databases and their Applications",
    isbn13: "9781484268780",
    price: "$34.74",
    image: "https://itbook.store/img/books/9781484268780.png",
    url: "https://itbook.store/books/9781484268780",
  },
  {
    title: "Pentaho Analytics for MongoDB",
    subtitle:
      "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
    isbn13: "9781782168355",
    price: "$16.99",
    image: "https://itbook.store/img/books/9781782168355.png",
    url: "https://itbook.store/books/9781782168355",
  },
  {
    title: "Pentaho Analytics for MongoDB Cookbook",
    subtitle:
      "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
    isbn13: "9781783553273",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781783553273.png",
    url: "https://itbook.store/books/9781783553273",
  },
  {
    title: "Web Development with MongoDB and NodeJS, 2nd Edition",
    subtitle:
      "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
    isbn13: "9781785287527",
    price: "$39.99",
    image: "https://itbook.store/img/books/9781785287527.png",
    url: "https://itbook.store/books/9781785287527",
  },
  {
    title: "MongoDB Cookbook, 2nd Edition",
    subtitle:
      "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
    isbn13: "9781785289989",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781785289989.png",
    url: "https://itbook.store/books/9781785289989",
  },
  {
    title: "The Little MongoDB Book",
    subtitle: "",
    isbn13: "1001592208320",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001592208320.png",
    url: "https://itbook.store/books/1001592208320",
  },
  {
    title: "Learning MongoDB",
    subtitle: "",
    isbn13: "1001629462276",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001629462276.png",
    url: "https://itbook.store/books/1001629462276",
  },
];

const Search = () => {
  return (
    <S.Wrapper>
      <S.BooksSection>
        <M.Typography variant="h3">
          Results for{" "}
          <M.Typography fontSize={"1.5rem"} component="span">
            mongodb
          </M.Typography>
        </M.Typography>

        <M.Typography variant="h5">25 books found</M.Typography>

        <M.Grid container spacing={2}>
          {books.map((book) => (
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
      </S.BooksSection>
    </S.Wrapper>
  );
};

export default Search;