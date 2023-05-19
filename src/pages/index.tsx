import { GetStaticProps } from "next";

import { api } from "@/services/api";
import HomeTemplate, { HomeTemplateProps } from "@/templates/home";

type HomeProps = HomeTemplateProps;

export default function Home({ bookReleases }: HomeProps) {
  return <HomeTemplate bookReleases={bookReleases} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/new");

  const data = response.data.books;

  const bookReleases = data.slice(0, 8);

  return {
    props: {
      bookReleases,
    },
    revalidate: 60 * 60 * 24 * 5,
  };
};
