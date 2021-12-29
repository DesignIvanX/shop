import React from "react";
import { Link } from "@reach/router";
import "./style/Product.css";
const product = ({ name, img, url, start, reviews, cost }) => {
  return (
    <Link to={url} className="Product">
      <div className="Product__content">
        <div className="Product__content__img">
          <img className="Product__content__img--img" src={img} alt={name} />
        </div>
        <div className="Product__content__text">
          <div className="Product__content__text__name">
            <h3 className="Product__content__text__name--h3">{name}</h3>
          </div>
          <div className="Product__content__text__info">
            <div className="Product__content__text__info__star">
              {start.map((item) => {
                return (
                  <span
                    className="Product__content__text__info__star--span"
                    key={item}
                  >
                    ★
                  </span>
                );
              })}
            </div>
            <div className="Product__content__text__info__reviews">
              <span className="Product__content__text__info__reviews--span">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>
          <div className="Product__content__text__cost">
            <span className="Product__content__text__cost--span">{cost}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default product;
