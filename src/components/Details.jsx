// Means
import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
// Components
import Loader from "./Loader";
import Product from "../pages/Product";
// Styles

const Details = ({ id }) => {
  const { state, addToCart } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const { products } = state;
  useEffect(() => {
    const data = () => {
      const data = products.filter((item) => {
        return item.name.includes(id);
      });
      setProduct({ data });
    };
    data();
  }, [products, id]);
  const handleAddToCart = (product, price, quantity) => () => {
    addToCart(product, price, quantity);
    const cart = document.querySelector(".Navegation__content__card__two");
    if (!cart.classList.contains("toggleCart")) {
      cart.classList.add("toggleCart");
    }
  };
  return (
    <>
      <div>
        {product.data !== undefined ? (
          <Product data={product.data} handleAddToCart={handleAddToCart} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Details;
