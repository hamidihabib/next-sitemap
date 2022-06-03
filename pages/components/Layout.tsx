import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

type Layout = {
  children: React.ReactNode;
};

export default function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
