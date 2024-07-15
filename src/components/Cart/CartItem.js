import classes from "./CartItem.module.css";
import { cartActions } from "../../store/index";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addItemToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeItemHandler = (title) => {
    dispatch(cartActions.removeFromCart(title));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemHandler(title)}>-</button>
          <button onClick={() => addItemToCartHandler(props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
