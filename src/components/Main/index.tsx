import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
