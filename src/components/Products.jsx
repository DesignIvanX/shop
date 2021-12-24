import React from "react";
import { Link } from "@reach/router";
import "./style/Products.css";
const Products = ({ title, url, children }) => {
  return (
    <div className="Products">
      <div className="Products__title">
        <Link className="Products__title--a" to={url}>
          {title}
        </Link>
      </div>
      <div className="Products__content">{children}</div>
    </div>
  );
};

export default Products;
