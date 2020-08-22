import { getCart } from "./cart.js";

const cartTotal = () => {
  const myCart = getCart();
  const total = myCart.reduce((a, cartItem) => {
    return a + cartItem.price;
  }, 0);

  return total;
};

export { cartTotal };
