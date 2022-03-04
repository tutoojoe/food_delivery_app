import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  //here will add helper constant, which will loop through
  // the list and make the return statement simple and elegant

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onBackdropClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>{" "}
      
      <div className={classes.actions}>
        <button className={classes["buttons--alt"]} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>{" "}
      
    </Modal>
  );
};

export default Cart;
