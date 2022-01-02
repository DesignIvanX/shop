import React from "react";
import { Link } from "@reach/router";
import { HiShoppingCart } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import Logo from "../source/static/merch/logo.png";
import "./style/Navegation.css";
const Navegation = () => {
  const handleOnClickCart = () => {
    const cart = document.querySelector(".Navegation__content__card__two");
    if (!cart.classList.contains("toggleCart")) {
      cart.classList.add("toggleCart");
      return;
    }
    cart.classList.remove("toggleCart");
  };
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
                  <Link to="/collections/all">SHOP</Link>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <Link to="/">Best sellers</Link>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <Link to="product/Scalibor Antiparasitic Collar">
                    Dog supplies
                  </Link>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <Link to="product/Dog Craft">Dog accessories</Link>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <Link to="product/Mini GPS Dogs">Food for dogs</Link>
                </li>
                <li className="Navegation__content__menu__content__nav__ul__li">
                  <Link to="product/Portable Water Bottle">Clear dog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="Navegation__content__logo">
          <Link to="/">
            <img src={Logo} alt="logo de the dog merch" />
          </Link>
        </div>
        <div className="Navegation__content__card">
          <div
            className="Navegation__content__card__one"
            onClick={handleOnClickCart}
          >
            <HiShoppingCart className="Navegation__content__card__one--icon" />
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
            <div className="Navegation__content__card__two__two"></div>
            <div className="Navegation__content__card__two__three">
              <div className="Navegation__content__card__two__three__one">
                <h3>Subtotal</h3>
                <span>US $0</span>
              </div>
              <div className="Navegation__content__card__two__three__two">
                <Link to="/checkout">PROCEED TO CHECKOUT</Link>
              </div>
              <div className="Navegation__content__card__two__three__three">
                <p>Shpping & taxes calculated at checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navegation;
