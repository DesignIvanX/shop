import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style/Faq.css";
const Faq = ({ data }) => {
  return (
    <div>
      {data !== undefined && (
        <div className="Faq">
          {data.map((faq) => {
            return (
              <div key={faq.title} className="Faq__content">
                <div className="Faq__content__title">
                  <h2 className="Faq__content__title--h2">{faq.title}</h2>
                  <IoIosArrowDown className="Faq__content__title--arrow" />
                </div>
                <div className="Faq__content__description">
                  <p className="Faq__content__description--p">
                    {faq.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Faq;
