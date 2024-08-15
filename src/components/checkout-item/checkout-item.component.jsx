import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemsToCart, reduceItemCountFromCart } =
    useContext(CartContext);

  const deleteItem = () => {
    deleteItemFromCart(cartItem);
  };

  const addItem = () => {
    addItemsToCart(cartItem);
  };

  const reduceItem = () => {
    reduceItemCountFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={deleteItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
