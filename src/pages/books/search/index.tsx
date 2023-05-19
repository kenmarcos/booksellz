import { useRouter } from "next/router";

import * as M from "@mui/material";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { Book, SearchResultData } from "@/types/books";
import { ChangeEvent } from "react";
import NoContentMessage from "@/components/NoContentMessage";

interface SearchProps {
  searchResultData: SearchResultData;
}

const Search = ({ searchResultData }: SearchProps) => {
  const router = useRouter();
  const keyword = router.query.keyword;
  const totalPages = Math.ceil(Number(searchResultData.total) / 10);
  const currentPage = router.query.page
    ? Number(router.query.page as string)
    : 1;

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    router.push({
      pathname: "/books/search",
      query: { keyword, page },
    });
  };

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

        {!searchResultData.books.length && (
          <NoContentMessage
            icon={<SearchOffOutlinedIcon />}
            mainMessage="No Result Found"
            subMessage="Please try again with another keyords or maybe generic term"
            // button={<M.Button variant="contained">Search Again</M.Button>}
          />
        )}

        {!!searchResultData.books.length && (
          <>
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
              color="primary"
              variant="text"
              size="large"
            />
          </>
        )}
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
