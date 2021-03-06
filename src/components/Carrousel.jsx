/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style/Carrousel.css";
import bg1 from "../source/static/carrousel/bg1.jpg";
const Carrousel = () => {
  return (
    <div className="Carrousel">
      <div className="Carrousel__cart">
        <img className="Carrousel__cart--img" src={bg1} alt="" />
        <div className="Carrousel__cart__text">
          <h2 className="Carrousel__cart__text--h2">Happy Pet</h2>
          <a className="Carrousel__cart__text--a" href="/best-sellers/">
            Shop Best Sellers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
