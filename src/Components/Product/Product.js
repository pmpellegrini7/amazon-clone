import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  // Envio el producto al dataLayer
  const addToBasket = () => {
    // Dispatch is like a trigger
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="product__container">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small> $ </small>
          <strong> {price} </strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </p>
      </div>

      <img className="product__img" src={image} alt="product-img" />

      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
