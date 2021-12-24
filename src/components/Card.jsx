import React from "react";
import { Link } from "@reach/router";
import "./style/Card.css";
const Card = ({ title, url, img }) => {
  return (
    <div className="Card">
      <Link className="Card--a" to={url}>
        <div className="Card--a__img">
          <img className="Card--a__img--img" src={img} alt={title} />
        </div>
        <h3 className="Card--a--h3">{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
