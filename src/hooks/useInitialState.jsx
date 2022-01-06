import { useState } from "react";
import initialState from "../API/products.json";
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload, price, quantity) => {
    console.log(price);
    setState({
      ...state,
      cart: [...state.cart, { ...payload, informationModel: price }],
    });
  };
  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload),
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  const sumTotal = (payload) => {
    console.log(payload);
    const reducer = (accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue.informationModel.Us);
    };
    const sum = payload.reduce(reducer, 0);
    return sum;
  };
  return { addToCart, removeToCart, addNewOrder, sumTotal, state };
};

export default useInitialState;
