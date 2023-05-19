import { GetStaticProps } from "next";

import ReleasesTemplate, {
  ReleasesTemplateProps,
} from "@/templates/books/releases";
import { api } from "@/services/api";

type ReleaseProps = ReleasesTemplateProps;

const Releases = ({ bookReleases }: ReleaseProps) => {
  return <ReleasesTemplate bookReleases={bookReleases} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/new");

  const bookReleases = response.data.books;

  return {
    props: {
      bookReleases,
    },
    revalidate: 60 * 60 * 24 * 5,
  };
};

export default Releases;
