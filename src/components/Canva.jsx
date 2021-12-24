import React from "react";
import Navegation from "./Navegation";
import Footer from "./Footer";
const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Footer />
    </>
  );
};

export default Canva;
