import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import BUTTON from "../button/button.component"
import "./cart-dropdown.styles.scss"


const CartDropdown = () =>{
    const { CartItems } = useContext(CartContext);
    return(
      <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout" className="checkout-button">
        <BUTTON className = "btn">GO TO CHECKOUT</BUTTON>
      </Link>
    </div>
    )
}

export default CartDropdown;