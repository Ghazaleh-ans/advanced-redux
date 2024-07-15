import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          const itemProp = { ...item, total };
          return <CartItem key={item.title} item={itemProp} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
