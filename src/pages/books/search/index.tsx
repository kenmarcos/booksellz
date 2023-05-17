import { useRouter } from "next/router";

import * as M from "@mui/material";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { Book, SearchResultData } from "@/types/books";
import { ChangeEvent } from "react";

interface SearchProps {
  searchResultData: SearchResultData;
}

const Search = ({ searchResultData }: SearchProps) => {
  const router = useRouter();
  const keyword = router.query.keyword;
  const totalPages = Math.ceil(parseInt(searchResultData.total) / 10);
  const currentPage = router.query.page
    ? parseInt(router.query.page as string)
    : 1;

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    router.push({
      pathname: "/books/search",
      query: { keyword, page },
    });
  };

  console.log(currentPage);

  return (
    <S.Wrapper>
      <S.BooksSection>
        <M.Typography variant="h3">
          Results for{" "}
          <M.Typography fontSize={"1.5rem"} component="span">
            {keyword}
          </M.Typography>
        </M.Typography>

        <M.Typography variant="h5">
          {searchResultData.total} books found
        </M.Typography>

        <M.Grid container spacing={2}>
          {searchResultData.books.map((book) => (
            <M.Grid key={book.isbn13} item xs={12} sm={4} md={2.4}>
              <BookCard
                isbn13={book.isbn13}
                image={book.image}
                title={book.title}
                price={book.price}
              />
            </M.Grid>
          ))}
        </M.Grid>

        <M.Pagination
          count={totalPages}
          shape="rounded"
          variant="outlined"
          page={currentPage}
          onChange={handleChangePage}
          siblingCount={1}
          boundaryCount={0}
          showFirstButton
          showLastButton
        />
      </S.BooksSection>
    </S.Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = context.query.keyword;
  const page = context.query.page ? context.query.page : 1;

  const response = await api.get(`/search/${keyword}/${page}`);

  const searchResultData = response.data;

  return {
    props: {
      searchResultData,
    },
  };
};

export default Search;
