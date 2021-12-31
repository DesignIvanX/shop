import React, { useState, useEffect } from "react";
import Products from "../API/products.json";
import Product from "../pages/Product";
const Details = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const data = () => {
      const data = Products.products.filter((item) => {
        return item.name.includes(id);
      });
      setProduct({ data });
    };
    data();
  }, [id]);
  return (
    <>
      <div>
        {product.data !== undefined ? <Product data={product.data} /> : null}
      </div>
    </>
  );
};

export default Details;
