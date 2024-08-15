import CartItem from "../cart-item/cart-item.component";
import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context"
import { XMarkIcon } from "@heroicons/react/24/outline";

import "./checkout.styles.scss";
const CheckoutPage = () => {
  const { CartItems, removeItemsFromCart } = useContext(CartContext);
  const removeItem = (cartItem) => {
    removeItemsFromCart(cartItem);
  };
  return (
    <div>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="cart-items">
        {CartItems.map((cartItem) => (
          <Fragment>
            <CartItem key={cartItem.id} cartItem={cartItem} />
            <button
              onClick={() => removeItem(cartItem)}
              className=" text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
