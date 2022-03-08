import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCartItems = () => {
    dispatch(showCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCartItems}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
