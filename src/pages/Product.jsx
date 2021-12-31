import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import { TiTick } from "react-icons/ti";
import "./style/Product.css";
const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const [img, setImg] = useState("");
  const handleOnChangeSelected = (product, color, type) => {
    getColorImg(product, color.target.value, type);
  };
  const handleOnClickImg = (product, color, type) => {
    getColorImg(product, color, type);
  };
  const getColorImg = (product, color, type) => {
    let image;
    if (type === "img") {
      image = product.img[0].img.find((img) => img.color === color);
    }
    if (type === "color") {
      image = product.img[0].color.find((img) => img.color === color);
    }
    setImg(image.img);
  };
  const handleOnClickQuantity = (operation) => {
    let accountant = quantity;

    if (operation === "+") {
      accountant = quantity + 1;
      setQuantity(accountant);
    } else {
      accountant = quantity - 1;
      if (quantity === 0) {
        accountant = 0;
      }
      setQuantity(accountant);
    }
  };
  useEffect(() => {
    getColorImg(data[0], "blue", "color");
  }, []);
  return (
    <div className="Product">
      <div className="Product__route">
        <a href="/">Home</a> / <a href="/">Best Sellers</a>
      </div>
      {data.map((product) => {
        return (
          <div className="Product__content" key={product.id}>
            <div className="Product__content__one">
              <div className="Product__content__one__img">
                <div>
                  <img
                    className="Product__content__one__img--img"
                    src={img}
                    alt={product.name}
                  />
                </div>
                <div className="Product__content__one__img__all">
                  {product.img[0].img.map((img) => {
                    return (
                      <img
                        key={img.img}
                        className="Product__content__one__img__all--img"
                        src={img.img}
                        onClick={() =>
                          handleOnClickImg(product, img.color, "img")
                        }
                        alt=""
                      />
                    );
                  })}
                </div>
              </div>
              <div className="Product__content__one__text">
                <div className="Product__content__one__text__one">
                  <h1 className="Product__content__one__text__one--h1">
                    {product.name}
                  </h1>
                  {product.stars[0].stars.map((item) => {
                    return (
                      <span
                        className="Product__content__one__text__one--span"
                        key={item}
                      >
                        ★
                      </span>
                    );
                  })}
                  <a
                    className="Product__content__one__text__one--a"
                    href="#reviews"
                  >
                    {product.reviews.length} (reviews)
                  </a>
                  <div className="Product__content__one__text__one__price">
                    <h3 className="Product__content__one__text__one__price--h3-price">
                      {product.price[0].US.Us}
                    </h3>
                    <span className="Product__content__one__text__one__price--span-discount">
                      {product.price[0].US.UsDiscount}
                    </span>
                  </div>
                </div>
                <div className="Product__content__one__text__two">
                  <form className="Product__content__one__text__two__form">
                    <select
                      onChange={(color) =>
                        handleOnChangeSelected(product, color, "color")
                      }
                    >
                      <option value="blue">blue</option>
                      <option value="yellow">yellow</option>
                      <option value="green">green</option>
                      <option value="pink">Pink</option>
                    </select>
                  </form>
                  <div className="Product__content__one__text__two__quantity">
                    <p className="Product__content__one__text__two__quantity--p">
                      Quantity:
                    </p>
                    <span
                      className="Product__content__one__text__two__quantity--res"
                      onClick={() => handleOnClickQuantity("-")}
                    >
                      -
                    </span>
                    <span className="Product__content__one__text__two__quantity--accountant">
                      {quantity}
                    </span>
                    <span
                      className="Product__content__one__text__two__quantity--sum"
                      onClick={() => handleOnClickQuantity("+")}
                    >
                      +
                    </span>
                    <p className="Product__content__one__text__two__quantity--stock">
                      {product.inStock ? "In Stock" : "No Stocks"}
                    </p>
                  </div>
                </div>
                <div className="Product__content__one__text__three">
                  <button className="Product__content__one__text__three--btn">
                    ADD TO CART
                  </button>
                  <p>{product.price[0].US.shippingUS} Shipping</p>
                  <Countdown
                    remainingSeconds="Wed Jan 2 2022 17:08:47 GMT+0100"
                    finalMessage="finish"
                  />
                </div>
              </div>
              <div className="Product__content__details">
                {product.productDetails.map((benefit) => {
                  return (
                    <div
                      key={benefit}
                      className="Product__content__details__content"
                    >
                      <div className="Product__content__details__content__benefits">
                        <h2 className="Product__content__details__content__benefits--h2">
                          Benefits of {product.name}
                        </h2>
                        <div className="Product__content__details__content__benefits__description">
                          {/* <div>
                            <p>{benefit.description}</p>
                          </div> */}
                          <div className="Product__content__details__content__benefits__description__container">
                            <ul className="Product__content__details__content__benefits__description__container--ul">
                              {benefit.benefits.map((benefit) => {
                                return (
                                  <div
                                    className="Product__content__details__content__benefits__description__container--ul--div"
                                    key={benefit}
                                  >
                                    <li>
                                      <TiTick className="Product__content__details__content__benefits__description__container--ul--div--tick" />
                                    </li>
                                    <li className="Product__content__details__content__benefits__description__container--ul--div--benefit">
                                      {benefit}
                                    </li>
                                  </div>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Product__content__details__content__details">
                        <h2 className="Product__content__details__content__details--h2">
                          Details of {product.name}
                        </h2>
                        <div>
                          <ul>
                            {benefit.details.map((detail) => {
                              return (
                                <div
                                  className="Product__content__details__content__details__div"
                                  key={detail}
                                >
                                  <li className="Product__content__details__content__details__div--detail">
                                    {detail}
                                  </li>
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="Product__content__video">
              <video src={product.video} controls></video>
            </div>
            <div className="Product__content__reviews">
              <div className="Product__content__reviews__one">
                <div className="Product__content__reviews__one__text">
                  <h2 className="Product__content__reviews__one__text--h2">
                    Reviews
                  </h2>
                  <p className="Product__content__reviews__one__text--p">
                    <TiTick />
                    Our reviews are verified for authenticity
                  </p>
                </div>
                <div className="Product__content__reviews__one__value">
                  <div className="Product__content__reviews__one__value__cube">
                    <h3 className="Product__content__reviews__one__value__cube--h3">
                      {product.stars[0].score}
                    </h3>
                    <p className="Product__content__reviews__one__value__cube--p">
                      out of 5
                    </p>
                  </div>
                  <div className="Product__content__reviews__one__value__starts">
                    <div>
                      {product.stars[0].stars.map((item) => {
                        return (
                          <span
                            className="Product__content__reviews__one__value__starts--span"
                            key={item}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                    <div>
                      <h4 className="Product__content__reviews__one__value__starts--h4">
                        {product.reviews.length} reviews
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Product__content__reviews__two">
                {product.reviews.map((review) => {
                  return (
                    <div
                      id="reviews"
                      className="Product__content__reviews__two__content"
                      key={review.name}
                    >
                      <div className="Product__content__reviews__two__content__nameystar">
                        <p className="Product__content__reviews__two__content__nameystar--p">
                          {review.name}
                        </p>
                        <div className="Product__content__reviews__two__content__nameystar__star">
                          {review.stars.map((star) => {
                            return (
                              <span
                                className="Product__content__reviews__two__content__nameystar__star--span"
                                key={star}
                              >
                                ★
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="Product__content__reviews__two__content__description">
                        <p className="Product__content__reviews__two__content__description--p">
                          {review.description}
                        </p>
                      </div>
                      <div className="Product__content__reviews__two__content__img">
                        {review.img.map((img) => {
                          return (
                            <img
                              src={img}
                              alt=""
                              className="Product__content__reviews__two__content__img"
                            />
                          );
                        })}
                      </div>
                      <div>
                        <p className="Product__content__reviews__two__content__description--p">
                          Yes, I recommend this product.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
