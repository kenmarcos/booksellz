import { GetServerSideProps } from "next";

import { api } from "@/services/api";
import { BookDetails } from "@/types/books";
import BookDetailsTemplate, {
  BookDetailsTemplateProps,
} from "@/templates/books/bookDetails";

type BookDetailsProps = BookDetailsTemplateProps;

const BookDetailsPage = ({ bookDetails }: BookDetailsProps) => {
  return <BookDetailsTemplate bookDetails={bookDetails} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const bookISBN13 = context.params?.bookISBN13;

  const response = await api.get(`/books/${bookISBN13}`);

  const bookDetails = response.data;

  return {
    props: {
      bookDetails,
    },
  };
};

export default BookDetailsPage;
