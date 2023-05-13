import { ReactNode } from "react";

import * as M from "@mui/material";

import Footer from "./components/Footer";
import Header from "./components/Header";
import * as S from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Main>
        <M.Container>{children}</M.Container>
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;
