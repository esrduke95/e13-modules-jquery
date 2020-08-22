import { addToCart } from "./cart.js";

const makeStore = (array, titles = false) => {
  // Clear the DOM each time this function is run
  $("#store").html("");

  // The forEach() method calls a function once for each element in an array, in order.
  // Syntax: array.forEach(function(currentValue, index, arr), thisValue)
  array.forEach((item, index) => {
    // The switch expression is evaluated once.
    // The value of the expression is compared with the values of each case.
    // If there is a match, the associated block of code is executed.
    // If there is no match, the default code block is executed.
    switch (titles) {
      // CHECKING TO SEE IF THE ARGUMENT 'TITLES' IS TRUE
      case true:
        $("#store").removeClass("card-columns");
        $("#store").append(`<div>${item.title} | ${item.price}</div>`);

        // When JavaScript reaches a break keyword, it breaks out of the switch block.
        // This will stop the execution of inside the block.
        // Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
        break;

      // If there is no match, the default code block is executed.
      default:
        $("#store").addClass("card-columns");
        $("#store").append(
          `<div class="card">
                  <img class="card-img-top" src=${item.image} alt=${
            item.title
          } style="height: 400px;">
                  <div class="card-body" style="height: 200px;">
                    <div class="sale-badge">${
                      item.featured
                        ? `<span class="badge badge-success">FEATURED</span>`
                        : ""
                    }</div>
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Price: $${item.price}</p>
                    <button class="btn btn-danger" id="cart-add-${index}">Add to Cart</button>
                  </div>
                </div>`
        );
    }

    // adding a dynmic click event to each "Add To Cart" button on the DOM
    // it is passing the ARRAY argument and the INDEX argument to the function so that they can be used later.
    addToCart(array, index);
  });
};

const emptyStore = () => {
  $("#store").removeClass("card-columns");
  $("#store").html("<h1>No Items with that title.</h1>");
};

export { makeStore, emptyStore };
