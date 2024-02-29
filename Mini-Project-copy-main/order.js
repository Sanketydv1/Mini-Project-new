
// coded by wrake
// var cart = [];

// function addToCart(a) {
//     if (!cart) {
//         cart = []; // Initialize cart if it's not defined
//       }
//     cart.push(a);
//     alert(a + " is added to cart");
//     console.log(cart);
// }

// function displayCartItems() {
//     let cartItemsList = document.querySelector(".your-order");
//     cartItemsList.innerHTML = ""; // Clear previous items
  
//     console.log(cart);
//   }

var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add item to the cart
function addToCart(item) {
    if (!cart) {
        cart = []; // Initialize cart if it's not defined
      }
  cart.push(item);
  alert(item + " is added to cart");
  saveCart(); // Save cart to local storage
}

// Function to save cart to local storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to display cart items
function displayCartItems() {
  let cartItemsList = document.querySelector(".your-order");
  cartItemsList.innerHTML = ""; // Clear previous items

  let cartFromStorage = localStorage.getItem("cart");
  console.log("Cart from storage:", cartFromStorage); // Debug statement
  
  // Ensure cart is initialized by parsing the retrieved value or using an empty array
  let cart = cartFromStorage ? JSON.parse(cartFromStorage) : [];
  console.log("Cart:", cart); // Debug statement
  console.log(cart);
  cart.forEach(function(item) {
    let listItem = document.createElement("p");
    listItem.textContent = item;
    cartItemsList.appendChild(listItem);
  });
// Retrieve cart from local storage
}

displayCartItems(); // Display cart items when the page loads