import { getBooks } from "./../helpers/data/bookData.js";
import { makeStore, emptyStore } from "./store.js";

const navigationEvents = () => {
  // "All Books" link in nav click event
  $("#all-books").on("click", () => {
    makeStore(getBooks("all"));
  });

  // "Featured Books" link in nav click event
  $("#featured-books").on("click", () => {
    makeStore(getBooks("featured"));
  });

  // "List of Titles" link in nav click event
  $("#titles").on("click", () => {
    makeStore(getBooks("titles"), true);
  });

  //TODO: Add search functionality
  // as the user types, searches through array of objects
  // returns the items that match
  // if no matches, clear DOM and provide a message that reads "No Items"

  $("#search").keyup((e) => {
    const searchValue = $("#search").val().toLowerCase();

    const searches = getBooks("all").filter((book) => {
      return book.title.toLowerCase().includes(searchValue);
    });

    console.log(searches);
    if (searches.length === 0) {
      emptyStore();
    } else {
      makeStore(searches);
    }

    if (e.keyCode === 13) {
      $("#search").val("");
    }
  });
};

export { navigationEvents };
