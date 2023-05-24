import Header from "../Components/Header/Header";
import { Footer } from "../Components/Footer";
import { Lists } from "../Components/Lists";

import React from "react";
function Productss({ product }) {
  return (
    <>
      <Header />
      <Lists product={product} />
      <Footer />
    </>
  );
}

export default Productss;