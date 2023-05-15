import Image from "next/image";

import * as M from "@mui/material";

import * as S from "./styles";

const book = {
  error: "0",
  title: "Data Visualization with Python and JavaScript, 2nd Edition",
  subtitle: "Scrape, Clean, Explore, and Transform Your Data",
  authors: "Kyran Dale",
  publisher: "O'Reilly Media",
  language: "English",
  isbn10: "1098111877",
  isbn13: "9781098111878",
  pages: "566",
  year: "2022",
  rating: "0",
  desc: "How do you turn raw, unprocessed, or malformed data into dynamic, interactive web visualizations? In this practical book, author Kyran Dale shows data scientists and analysts-as well as Python and JavaScript developers-how to create the ideal toolchain for the job. By providing engaging examples and...",
  price: "$60.99",
  image: "https://itbook.store/img/books/9781098111878.png",
  url: "https://itbook.store/books/9781098111878",
};

const BookDetails = () => {
  return (
    <S.Wrapper>
      <S.ImageSection>
        <Image
          src={book.image}
          width={800}
          height={800}
          quality={100}
          alt="book cover"
        />
      </S.ImageSection>

      <S.InfoSection>
        <M.Typography variant="h2">{book.title}</M.Typography>

        <M.Typography variant="h3">{book.subtitle}</M.Typography>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Description</M.Typography>
            <M.Typography>{book.desc}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Author</M.Typography>
            <M.Typography>{book.authors}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">ISBN-13</M.Typography>
            <M.Typography>{book.isbn13}</M.Typography>
          </M.Box>
        </S.Information>

        <S.Information>
          <M.Box>
            <M.Typography variant="h4">Publisher</M.Typography>
            <M.Typography>{book.publisher}</M.Typography>
          </M.Box>

          <M.Box>
            <M.Typography variant="h4">Year</M.Typography>
            <M.Typography>{book.year}</M.Typography>
          </M.Box>
        </S.Information>

        <M.Typography variant="h2">{book.price}</M.Typography>

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

export default BookDetails;
