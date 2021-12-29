import React, { useState, useEffect } from "react";
import "./style/Product.css";
const Product = ({ data }) => {
  const [color, setColor] = useState("blue");
  const [quantity, setQuantity] = useState(0);
  const handleOnChangeSelected = (e, product) => {
    setColor(e.target.value);
    getColorImg(product);
  };
  const getColorImg = (product) => {
    let image = product.img[0].color.find((img) => img.color === color);
    return image.img;
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
    getColorImg(data[0]);
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
                <img
                  className="Product__content__one__img--img"
                  src={getColorImg(product)}
                  alt={product.name}
                />
              </div>
              <div className="Product__content__one__text">
                <div className="Product__content__one__text__one">
                  <h2 className="Product__content__one__text__one--h2">
                    {product.name}
                  </h2>
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
                      onChange={(e) => handleOnChangeSelected(e, product)}
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
                  <p>{product.price[0].US.shippingUS} free shipping 00:00:00</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
