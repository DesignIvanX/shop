import { useState } from "react";
import initialState from "../API/products.json";
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload),
    });
  };
  const sumTotal = (payload) => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue.price[0].US.Us);
    };
    const sum = payload.reduce(reducer, 0);
    return sum;
  };
  return { addToCart, removeToCart, sumTotal, state };
};

export default useInitialState;
