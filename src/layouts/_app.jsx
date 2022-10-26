import React from "react";
import Footer from "../components/Footer";

export default function App({ children, not404 }) {
  return (
    <>
      {children}
      {not404 ? <Footer /> : null}
    </>
  );
}
