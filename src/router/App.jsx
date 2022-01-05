import React from "react";
import { Router } from "@reach/router";
import { AppContextProvider } from "../context/AppContext";
import Canva from "../components/Canva";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Collections from "../pages/Collections";
import Details from "../components/Details";
import Checkout from "../pages/Checkout";
import Information from "../pages/Information";
import Payment from "../pages/Payment";
import Success from "../pages/Success";

const App = () => {
  return (
    <AppContextProvider>
      <Canva>
        <Router>
          <NotFound default />
          <Home path="/" />
          <Contact path="/contact" />
          <Collections path="/collections/all" />
          <Details path="/product/:id" />
          <Checkout path="/checkout" />
          <Information path="/checkout/information" />
          <Payment path="/checkout/payment" />
          <Success path="/checkout/success" />
        </Router>
      </Canva>
    </AppContextProvider>
  );
};

export default App;
