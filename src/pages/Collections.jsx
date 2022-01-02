import React from "react";
import API from "../API/products.json";
import Benefits from "../components/Benefits";
import "./style/Collections.css";
const Collections = () => {
  return (
    <div className="Collection">
      <div className="Collection__title">
        <h1 className="Collection__title--h1">Products</h1>
        <hr />
      </div>
      <div className="Collection__all">
        {API.products.map((product) => {
          return (
            <a
              className="Collection__all__box"
              href={`/product/${product.name}`}
            >
              <div className="Collection__all__box__img">
                <img
                  className="Collection__all__img--img"
                  src={product.presentation[0].img}
                  alt=""
                />
                <img
                  className="Collection__all__img--img--hidden"
                  src={product.presentation[0].change}
                  alt=""
                />
              </div>
              <div className="Collection__all__box__text">
                <div className="Collection__all__box__text__name">
                  <h2 className="Collection__all__box__text__name--h2">
                    {product.name}
                  </h2>
                </div>
                <div className="Collection__all__box__text__reviews">
                  <div className="Collection__all__box__text__reviews__stars">
                    {product.stars[0].stars.map((item) => {
                      return (
                        <span
                          className="Collection__all__box__text__reviews__stars--stars"
                          key={item}
                        >
                          ★
                        </span>
                      );
                    })}
                  </div>
                  <div className="Collection__all__box__text__reviews__content">
                    <p className="Collection__all__box__text__reviews__content--p">
                      {product.reviews.length} reviews
                    </p>
                  </div>
                </div>
                <div className="Collection__all__box__text__price">
                  <span className="Collection__all__box__text__price--line"></span>
                  <h3 className="Collection__all__box__text__price--us">
                    ${product.price[0].US.Us + product.price[0].US.more}
                  </h3>
                </div>
              </div>
              <div className="Collection__all__box__porcentage">
                <span className="Collection__all__box__porcentage--span">
                  SAVE
                </span>
                <h5 className="Collection__all__box__porcentage--usporcentage">
                  $
                  {Math.floor(
                    product.price[0].US.UsDiscount - product.price[0].US.Us
                  )}
                </h5>
              </div>
            </a>
          );
        })}
      </div>
      <Benefits />
    </div>
  );
};

export default Collections;
