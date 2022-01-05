// Means
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
// Components
import Card from "../components/Card";
// Styles
import "./style/Collections.css";

const Collections = () => {
  const { state } = useContext(AppContext);
  const { products } = state;
  return (
    <div className="Collection">
      <h1 className="Collection--h1">
        Products
        <hr />
      </h1>
      <div className="Collection__all">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};

export default Collections;
