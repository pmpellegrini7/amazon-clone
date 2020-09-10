import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../../StateProvider";

import { AnimatedList } from "react-animated-list";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const renderBasketItems = () => {
    return basket.map((item) => {
      return (
        <BasketItem
          key={item.title}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      );
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
          className="checkout__ad"
        />
        <div>
          <h3>{user ? "Hey, " + user.displayName : ""}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <AnimatedList animation={"zoom"}>{renderBasketItems()}</AnimatedList>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
