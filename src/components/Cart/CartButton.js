import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHaandler = () => {
    dispatch(cartActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={toggleHaandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
