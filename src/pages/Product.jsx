import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import Rusia from "../source/static/flag/rusia.png";
import EEUU from "../source/static/flag/eeuu.png";
import { TiTick } from "react-icons/ti";
import Faq from "../components/Faq";
import Benefits from "../components/Benefits";
import { IoIosArrowDown } from "react-icons/io";
import "./style/Product.css";
const Product = ({ data, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [img, setImg] = useState("");
  const [price, setPrice] = useState({
    Us: "",
    UsDiscount: "",
    Usporcentage: "",
    shippingUS: "",
  });
  const handleOnChangeSelectedSize = (e, product) => {
    const size = product.img[0].size.find(
      (size) => size.size === e.target.value
    );
    setPrice({
      size: size.size,
      Us: size.Us,
      UsDiscount: size.UsDiscount,
      Usporcentage: size.Usporcentage,
      shippingUS: size.shippingUS,
    });
  };
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
    if (type === "color" && price.size === undefined) {
      setPrice(image.price[0].US);
    }
  };
  const handleOnClickQuantity = (operation) => {
    let accountant = quantity;

    if (operation === "+") {
      accountant = quantity + 1;
      setQuantity(accountant);
    } else {
      accountant = quantity - 1;
      if (quantity === 1) {
        accountant = 1;
      }
      setQuantity(accountant);
    }
  };
  useEffect(() => {
    getColorImg(data[0], data[0].img[0].color[0].color, "color");
  }, []);
  return (
    <div className="Product">
      <div id="top" className="Product__route">
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
                      ${price.Us}
                    </h3>
                    <span className="Product__content__one__text__one__price--span-discount">
                      ${price.UsDiscount}
                    </span>
                    <span className="Product__content__one__text__one__price--span-porcentage">
                      {price.Usporcentage}%
                    </span>
                  </div>
                </div>
                <div className="Product__content__one__text__two">
                  <form className="Product__content__one__text__two__form">
                    {product.img[0].img.length !== 0 ? (
                      <select
                        onChange={(color) =>
                          handleOnChangeSelected(product, color, "color")
                        }
                      >
                        {product.img[0].color.map((img) => {
                          return (
                            <option key={img.color} value={img.color}>
                              {img.color}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      false
                    )}

                    {product.img[0].size.length !== 0 && (
                      <select
                        onChange={(e) => handleOnChangeSelectedSize(e, product)}
                      >
                        {product.img[0].size.map((size) => {
                          return (
                            <option key={size.size} value={size.price}>
                              {size.size}
                            </option>
                          );
                        })}
                      </select>
                    )}
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
                  <button
                    onClick={handleAddToCart(product, quantity)}
                    className="Product__content__one__text__three--btn"
                  >
                    ADD TO CART
                  </button>
                  <p>${price.shippingUS} Shipping</p>
                  <Countdown
                    remainingSeconds="Wed Jan 8 2022 18:06:00 GMT+0100"
                    finalMessage="finish"
                  />
                </div>
              </div>
            </div>
            {/* DETAILS */}
            <div className="Product__content__details">
              {product.productDetails.map((productDetail) => {
                return (
                  <div
                    className="Product__content__details__box"
                    key={productDetail}
                  >
                    {productDetail.benefits.length !== 0 && (
                      <div className="Product__content__details__box__hidden">
                        <div className="Product__content__details__box__hidden__title">
                          <h2 className="Product__content__details__box__hidden__title--h2">
                            Benefits of {product.name}
                          </h2>
                          <IoIosArrowDown className="Product__content__details__box__hidden__title--arrow" />
                        </div>
                        {productDetail.benefits.map((benefit) => {
                          return (
                            <div
                              className="Product__content__details__box__hidden__description"
                              key={benefit}
                            >
                              <TiTick className="Product__content__details__box__hidden__description--tick" />
                              <li className="Product__content__details__box__hidden__description--li">
                                {benefit}
                              </li>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {productDetail.details.length !== 0 && (
                      <div className="Product__content__details__box__hidden">
                        <div className="Product__content__details__box__hidden__title">
                          <h2 className="Product__content__details__box__hidden__title--h2">
                            Details of {product.name}
                          </h2>
                          <IoIosArrowDown className="Product__content__details__box__hidden__title--arrow" />
                        </div>
                        {productDetail.details.map((detail) => {
                          return (
                            <div
                              className="Product__content__details__box__hidden__description"
                              key={detail}
                            >
                              <TiTick className="Product__content__details__box__hidden__description--tick" />
                              <li className="Product__content__details__box__hidden__description--li">
                                {detail}
                              </li>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <div className="Product__content__details__box__hidden">
                      <div className="Product__content__details__box__hidden__title">
                        <h2 className="Product__content__details__box__hidden__title--h2">
                          Description of {product.name}
                        </h2>
                        <IoIosArrowDown className="Product__content__details__box__hidden__title--arrow" />
                      </div>

                      <div
                        className="Product__content__details__box__hidden__description"
                        key={productDetail.description}
                      >
                        <li className="Product__content__details__box__hidden__description--li">
                          {productDetail.description}
                        </li>
                      </div>
                    </div>
                    <div className="Product__content__details__box__img">
                      {productDetail.img.map((img) => {
                        return (
                          <img
                            key={img.img}
                            className="Product__content__details__box__img--img"
                            src={img.img}
                            alt=""
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* VIDEO */}
            {product.video !== false && (
              <div className="Product__content__video">
                <video
                  src={product.video}
                  controls
                  className="Product__content__video--video"
                ></video>
              </div>
            )}
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
              <div id="reviews" className="Product__content__reviews__two">
                {product.reviews.map((review) => {
                  return (
                    <div
                      className="Product__content__reviews__two__content"
                      key={review.name}
                    >
                      <div className="Product__content__reviews__two__content__nameystar">
                        <p className="Product__content__reviews__two__content__nameystar--p">
                          <img
                            src={review.flag === "rusia" ? Rusia : EEUU}
                            alt=""
                          />
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
                              className="Product__content__reviews__two__content__img--img"
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
            <Faq data={product.faq} />
            <Benefits />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
