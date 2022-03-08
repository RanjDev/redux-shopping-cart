import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const add2Cart = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={add2Cart}>Add to cart</button>
    </div>
  );
};

export default Product;
