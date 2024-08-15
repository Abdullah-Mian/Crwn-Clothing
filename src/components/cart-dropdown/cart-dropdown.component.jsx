import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link ,useNavigate} from "react-router-dom";
import BUTTON from "../button/button.component"
import "./cart-dropdown.styles.scss"


const CartDropdown = () =>{
  const navigate = useNavigate();
  const goToCheckout =()=>{
    navigate("/checkout")
  }
    const { CartItems } = useContext(CartContext);
    return(
      <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
        <BUTTON onClick= {goToCheckout}>GO TO CHECKOUT</BUTTON>
    </div>
    )
}

export default CartDropdown;