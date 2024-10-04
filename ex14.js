// Exercise 14: Write a closure function `createCart` that returns an object with two methods: 
// `addItem(item)` to add an item to the cart, and `getItems()` 
// Example: const cart = createCart(); cart.addItem("apple"); cart.getItems(); // ["apple"]

const cart = createCart();
cart.addItem("apple");
cart.addItem("banana");
console.log(cart.getItems()); // Expected output: ["apple", "banana"]

function createCart() {
  const array = [];
  return {
    addItem: function(str) {
      array.push(str);
    },
    getItems: function() {
      return array;
    }
  };
}