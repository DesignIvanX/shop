import React from "react";
import { Link } from "@reach/router";

const product = ({ name, img, url, start, reviews, cost }) => {
  return (
    <Link to={url} className="Product">
      <div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <div className="star-rating">
              {start.map((item) => {
                return <span key={item}>★</span>;
              })}
            </div>
            <div>({reviews.length} reviews)</div>
          </div>
          <div>
            <span>{cost}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default product;
