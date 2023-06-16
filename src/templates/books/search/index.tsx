import * as M from "@mui/material";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

import * as S from "./styles";
import BookCard from "@/components/BookCard";
import { SearchResultData } from "@/types/books";
import NoContentMessage from "@/components/NoContentMessage";
import useSearch from "./useSearch";

export interface SearchTemplateProps {
  searchResultData: SearchResultData;
}

const SearchTemplate = ({ searchResultData }: SearchTemplateProps) => {
  const { handleChangePage, totalPages, currentPage, keyword } =
    useSearch(searchResultData);

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

export default SearchTemplate;
