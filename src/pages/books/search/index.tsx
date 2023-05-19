import { GetServerSideProps } from "next";

import SearchTemplate, { SearchTemplateProps } from "@/templates/books/search";
import { api } from "@/services/api";

type SearchProps = SearchTemplateProps;

const Search = ({ searchResultData }: SearchProps) => {
  return <SearchTemplate searchResultData={searchResultData} />;
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
