import { setCart, emptyCart } from "../../helpers/data/cartData.js";
import { cartTotal } from "./cartTotal.js";
import { getCart } from "./../../helpers/data/cartData.js";

const makeCart = () => {
  $("#cart").html(` 
      <div class="modal fade" id="buy-modal" tabindex="-1" role="dialog" aria-labelledby="buy-modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="buy-modalLabel">Order Total</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
  
            <div class="cart-items">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
  
  
            <div class="modal-body">
              <b>Your total is: $${cartTotal().toFixed(2)}</b>
              <div id="error-message" style="color: red;"></div>
              <input class="form-control mr-sm-2" id="credit-card" type="number" placeholder="Enter Credit Card Number" aria-label="Credit Card">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="charge-it">Charge it!</button>
            </div>
          </div>
        </div>
      </div>
  
      <i class="fas fa-shopping-cart cart"></i>
        <div id="cart-stuff">
          <h3>My Cart</h3>
          <div id="cart-thumb"></div>
          <div id="cart-price">
            <div>$${cartTotal().toFixed(2)}</div>
          </div>
            <button class="btn btn-danger" data-toggle="modal" data-target="#buy-modal" id="checkout">Checkout</button>
        </div>`);

  //TODO: ADD EVENT LISTENER To modal "Charge It" button AFTER BUTTON IS ON THE DOM
  $("#charge-it").click(() => {
    const ccNum = $("#credit-card").val();
    chargeIt(ccNum);
  });

  showCartItems();
};

const addToCart = (array, index) => {
  // getting the specific dynamically set ID on the button
  const cartButton = $(`#cart-add-${index}`);

  // adding an click event listener to the button above
  cartButton.on("click", () => {
    // passing the arguments to add to cart so that they can be used in the function that adds the item to the cart array and build the DOM element

    setCart(array[index]);
    // refresh the cart on the addition of a new item
    makeCart();
  });
};

export { makeCart, addToCart, getCart };
