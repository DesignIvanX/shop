import React from "react";
import { Router } from "@reach/router";
import Canva from "../components/Canva";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Details from "../components/Details";
import Checkout from "../pages/Checkout";
import Information from "../pages/Information";
import Payment from "../pages/Payment";
import Success from "../pages/Success";
const App = () => {
  return (
    <Canva>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Details path="/product/:id" />
        <Checkout path="/checkout" />
        <Information path="/checkout/information" />
        <Payment path="/checkout/payment" />
        <Success path="/checkout/success" />
      </Router>
    </Canva>
  );
};

export default App;
