import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { HiShoppingCart } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import Logo from "../source/static/merch/logo.png";
import "./style/Navegation.css";
const Navegation = () => {
  const { state, addToCart, removeToCart, sumTotal } = useContext(AppContext);
  const { cart } = state;
  const handleOnClickCart = () => {
    const cart = document.querySelector(".Navegation__content__card__two");
    if (!cart.classList.contains("toggleCart")) {
      cart.classList.add("toggleCart");
      return;
    }
    cart.classList.remove("toggleCart");
  };
  console.log(cart);
  const handleOnClickHamburger = () => {
    const nav = document.querySelector(
      ".Navegation__content__menu__content__nav"
    );
    const burger = document.querySelector(".Navegation__content__menu__icon");
    if (!nav.classList.contains("toggle")) {
      nav.classList.add("toggle");
      burger.classList.add("active");
      return;
    }
    nav.classList.remove("toggle");
    burger.classList.remove("active");
  };
  const handleRemoveToCart = (item) => () => {
    removeToCart(item.id);
  };
  const handleAddToCart = (item) => () => {
    addToCart(item);
  };
  const handleSumTotal = () => {
    return sumTotal(cart);
  };
  return (
    <div className="Navegation">
      <div className="Navegation__content">
        <div className="Navegation__content__menu">
          <div
            className="Navegation__content__menu__icon"
            onClick={handleOnClickHamburger}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="Navegation__content__menu__content">
            <nav className="Navegation__content__menu__content__nav">
              <ul className="Navegation__content__menu__content__nav__ul">
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="/collections/all">SHOP</a>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="/">Best sellers</a>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="product/Scalibor Antiparasitic Collar">
                    Dog supplies
                  </a>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="product/Dog Craft">Dog accessories</a>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="product/Mini GPS Dogs">Food for dogs</a>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <a href="product/Portable Water Bottle">Clear dog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="Navegation__content__logo">
          <a href="/">
            <img src={Logo} alt="logo de the dog merch" />
          </a>
        </div>
        <div className="Navegation__content__card">
          <div
            className="Navegation__content__card__one"
            onClick={handleOnClickCart}
          >
            <HiShoppingCart className="Navegation__content__card__one--icon" />
            {state.cart.length !== 0 ? (
              <span className="Navegation__content__card__one--span">
                {state.cart.length}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="Navegation__content__card__two">
            <div className="Navegation__content__card__two__one">
              <div className="Navegation__content__card__two__one__content">
                <div className="Navegation__content__card__two__one__content__text">
                  <h3>SHOPPING CART</h3>
                </div>
                <div
                  className="Navegation__content__card__two__one__content__x"
                  onClick={handleOnClickCart}
                >
                  <GrFormClose />
                </div>
              </div>
            </div>
            {cart.length !== 0 ? (
              <div>
                <div className="Navegation__content__card__two__two">
                  {cart.map((item) => {
                    return (
                      <div
                        key={item.name}
                        className="Navegation__content__card__two__two__product"
                      >
                        <a href={`/product/${item.name}`}>
                          <div className="Navegation__content__card__two__two__product__img">
                            <img
                              className="Navegation__content__card__two__two__product__img--img"
                              src={item.presentation[0].img}
                              alt={item.name}
                            />
                          </div>
                        </a>
                        <div className="Navegation__content__card__two__two__product__information">
                          <div className="Navegation__content__card__two__two__product__information__one">
                            <a href={`/product/${item.name}`}>
                              <h3 className="Navegation__content__card__two__two__product__information__one--h3">
                                {item.name}
                              </h3>
                            </a>
                          </div>
                          <div className="Navegation__content__card__two__two__product__information__two">
                            <div className="Navegation__content__card__two__two__product__information__two__quantity">
                              <button
                                onClick={handleRemoveToCart(item)}
                                className="Navegation__content__card__two__two__product__information__two__quantity--res"
                              >
                                -
                              </button>
                              <span className="Navegation__content__card__two__two__product__information__two__quantity--span">
                                {item.quantity}
                              </span>
                              <button
                                onClick={handleAddToCart(item)}
                                className="Navegation__content__card__two__two__product__information__two__quantity--sum"
                              >
                                +
                              </button>
                            </div>
                            <div className="Navegation__content__card__two__two__product__information__two__price">
                              <h3 className="Navegation__content__card__two__two__product__information__two__price--h3">
                                ${item.price[0].US.Us}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="Navegation__content__card__two__three">
                  <div className="Navegation__content__card__two__three__one">
                    <h3>Subtotal</h3>
                    <span>US ${handleSumTotal()}</span>
                  </div>
                  <div className="Navegation__content__card__two__three__two">
                    <a href="/checkout">PROCEED TO CHECKOUT</a>
                  </div>
                  <div className="Navegation__content__card__two__three__three">
                    <p>Shpping & taxes calculated at checkout</p>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="isEmpty">Your cart is currently empty.</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navegation;
