import { ChangeEvent } from "react";
import { useRouter } from "next/router";

import { SearchResultData } from "@/types/books";

const useSearch = (searchResultData: SearchResultData) => {
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

  return {
    handleChangePage,
    totalPages,
    currentPage,
    keyword,
  };
};

export default useSearch;
