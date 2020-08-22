const cart = [];

//TODO: add setCart function
const setCart = (book) => {
  cart.push(book);
};

// GETTER function for getting the cart array
const getCart = () => {
  return cart;
};

const emptyCart = () => {
  cart.length = 0;
};

export { setCart, getCart, emptyCart }