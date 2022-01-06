import React, { useEffect, useContext } from "react";
import { navigate } from "@reach/router";
import AppContext from "../context/AppContext";
import { PayPalButton } from "react-paypal-button-v2";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import "./style/Checkout.css";
const Checkout = () => {
  const { addNewOrder, state, sumTotal } = useContext(AppContext);
  const { cart } = state;
  const paypalOptions = {
    clientId:
      "ASzOhz0WUtg-Fn_5e6PV-RLPl03W897vL15ir6YyoHt9tWlAhwzCLiq7EaGnTyelxTFF3ot62XF7Yn45",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyle = {
    layout: "vertical",
    shape: "rect",
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer: {
          id: data.id,
          create: data.update_time,
          name: data.player.name.given_name,
          lastName: data.player.name.surname,
          email: data.player.email_address,
          address: data.purchase_units[0].address,
          amount: data.purchase_units[0].amount,
        },
        products: cart.informationModel,
        payment: data,
      };
      console.log(newOrder);
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };
  const handleSumTotal = () => {
    return sumTotal(cart);
  };
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
            {cart.map((item) => {
              return (
                <div
                  key={item.name + Math.random() * 1000}
                  className="Checkout__content__all__products__product"
                >
                  <div className="Checkout__content__all__products__product__img">
                    <img
                      className="Checkout__content__all__products__product--img"
                      src={item.informationModel.imgModel}
                      alt={item.name}
                    />
                    <span className="Checkout__content__all__products__product--span">
                      {item.informationModel.quantity}
                    </span>
                  </div>
                  <div className="Checkout__content__all__products__product__description">
                    <div>
                      <h2 className="Checkout__content__all__products__product__description--h2">
                        {item.name}
                      </h2>
                      <div className="Checkout__content__all__products__product__description__details">
                        {item.informationModel.color && (
                          <span className="Checkout__content__all__products__product__description__details--span">
                            {item.informationModel.color}
                          </span>
                        )}
                        {item.informationModel.size && (
                          <span className="Checkout__content__all__products__product__description__details--span">
                            {item.informationModel.size}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="Checkout__content__all__products__product__description--h3">
                        ${item.informationModel.Us}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Checkout__content__all__products__total">
            <div className="Checkout__content__all__products__total__container">
              <div className="Checkout__content__all__products__total__container__one">
                <span className="Checkout__content__all__products__total__container__one--span">
                  Subtotal
                </span>
                <span className="Checkout__content__all__products__total__container__one--span">
                  US ${handleSumTotal()}
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
                  USD ${handleSumTotal()}
                </h2>
              </div>
            </div>
          </div>
          <div className="Checkout__content__all__products__payment">
            <div className="Checkout__content__all__products__payment__details">
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
            </div>

            <div className="Checkout__content__all__products__payment__button">
              <PayPalButton
                options={paypalOptions}
                style={buttonStyle}
                amount={handleSumTotal()}
                onStart={() => console.log("Start Payment")}
                // onShippingChange={(data) => console.log(data)}
                onSuccess={(data) => handlePaymentSuccess(data)}
                onError={(e) => console.log(e)}
                catchError={(e) => console.log(e)}
                onCancel={(data) => console.log(data)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
