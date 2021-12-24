import React from "react";
import "./style/Email.css";
import { MdArrowForwardIos, MdMarkEmailRead } from "react-icons/md";
const Email = () => {
  return (
    <div className="Email">
      <div className="Email__content">
        <form className="Email__content__form">
          <label className="Email__content__form__label--one">
            <MdMarkEmailRead />
            Be the first to know
          </label>
          <label className="Email__content__form__label--two">
            Discover new arrivals, exclusive offers, and much more
          </label>
          <div className="Email__content__form__div">
            <input type="text" placeholder="Please enter your email" />
            <button type="submit">
              <MdArrowForwardIos />
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Email;
