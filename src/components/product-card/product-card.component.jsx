import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"
import BUTTON from "../button/button.component";

const  ProductCard = ({product}) => {
   const  {name, price, imageUrl } = product;
   const { addItemsToCart } = useContext(CartContext);
   const addItemsTOCart = () => addItemsToCart(product);
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span  className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <BUTTON buttonType='inverted' onClick ={addItemsTOCart}>ADD TO CART</BUTTON>
        </div>
    )
}

export default ProductCard;