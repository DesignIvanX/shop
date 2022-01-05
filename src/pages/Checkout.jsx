import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import "./style/Checkout.css";
const Checkout = () => {
  const { state } = useContext(AppContext);
  useEffect(() => {
    const footer = document.querySelector(".Footer");
    const nav = document.querySelector(".Navegation");
    footer.style = "display: none";
    nav.style = "display: none";
  });
  return (
    <div className="Checkout">
      <div className="Checkout__content">
        <div className="Checkout__content__img"></div>
        <div className="Checkout__content__all">
          <div className="Checkout__content__all__redirect">
            <a
              className="Checkout__content__all__redirect--a"
              href="/collections/all"
            >
              Collections
            </a>
            <span className="Checkout__content__all__redirect--span">
              <MdArrowForwardIos className="Checkout__content__all__redirect--span---icon" />
            </span>
            <p className="Checkout__content__all__redirect--p--one">Details</p>
            <span className="Checkout__content__all__redirect--span">
              <MdArrowForwardIos className="Checkout__content__all__redirect--span---icon" />
            </span>
            <p className="Checkout__content__all__redirect--p">
              Order complete
            </p>
          </div>
          <div className="Checkout__content__all__products">
            <div className="Checkout__content__all__products__h2">
              <h2 className="Checkout__content__all__products__h2--h2">
                Your Order
              </h2>
            </div>
            <div className="Checkout__content__all__products__product">
              <div className="Checkout__content__all__products__product__img">
                <img
                  className="Checkout__content__all__products__product--img"
                  src="https://ae01.alicdn.com/kf/Hd728cb0e836149ba8000864bc5abca312/Figura-de-artesan-a-de-perro-de-madera-para-cachorro-familiar-adorno-de-mesa-de-escritorio.jpg_640x640.jpg"
                  alt=""
                />
                <span className="Checkout__content__all__products__product--span">
                  2
                </span>
              </div>
              <div className="Checkout__content__all__products__product__description">
                <div>
                  <h2 className="Checkout__content__all__products__product__description--h2">
                    Dog Craft
                  </h2>
                </div>
                <div>
                  <h3 className="Checkout__content__all__products__product__description--h3">
                    $34.99
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="Checkout__content__all__products__total">
            <div className="Checkout__content__all__products__total__container">
              <div className="Checkout__content__all__products__total__container__one">
                <span className="Checkout__content__all__products__total__container__one--span">
                  Subtotal
                </span>
                <span className="Checkout__content__all__products__total__container__one--span">
                  US $12.00
                </span>
              </div>
              {/* <div className="Checkout__content__all__products__total__container__one">
                <span className="Checkout__content__all__products__total__container__one--span">
                  You Save
                </span>
                <span className="Checkout__content__all__products__total__container__one--span">
                  US $12.00
                </span>
              </div> */}
              <div className="Checkout__content__all__products__total__container__two">
                <span className="Checkout__content__all__products__total__container__two--span">
                  Shipping
                </span>
                <span className="Checkout__content__all__products__total__container__two--span Checkout__content__all__products__total__container__two--span--active">
                  Free
                </span>
              </div>
              <div className="Checkout__content__all__products__total__container__two">
                <h2 className="Checkout__content__all__products__total__container__two--h2">
                  You Pay
                </h2>
                <h2 className="Checkout__content__all__products__total__container__two--h2">
                  US $12.00
                </h2>
              </div>
            </div>
          </div>
          <div className="Checkout__content__all__products__payment">
            <div className="Checkout__content__all__products__payment__p">
              <p className="Checkout__content__all__products__payment__p--p">
                Select a payment method
              </p>
            </div>
            <div className="Checkout__content__all__products__payment__icons">
              <FaCcVisa className="Checkout__content__all__products__payment__icons--icon" />
              <FaCcMastercard className="Checkout__content__all__products__payment__icons--icon" />
              <SiMastercard className="Checkout__content__all__products__payment__icons--icon" />
              <FaCcPaypal className="Checkout__content__all__products__payment__icons--icon" />
            </div>
            <div className="Checkout__content__all__products__payment__button">
              {/* Button Paypal */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
