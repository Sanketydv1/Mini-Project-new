let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// for click in form to change icon sign-in or sign-up button
signinbtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign in";
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");
};

signupbtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign up";
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");
};
//search
function search() {
  // Get the input value
  var searchTerm = document.getElementById("searchInput").value;

  // Perform your search logic here
  // For simplicity, let's just display the search term in the results container
  displayResults(searchTerm);
}

function displayResults(searchTerm) {
  var resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Display the search term
  var result = document.createElement("p");
  result.textContent = "Search Results: " + searchTerm;
  resultsContainer.appendChild(result);
  // Add more logic to display actual search results
}
//time scedule
function search() {
  // Get the input value
  var searchTerm = document.getElementById("searchInput").value;

  // Perform your search logic here
  // For simplicity, let's just display the search term in the results container
  displayResults(searchTerm);
}

function displayResults(searchTerm) {
  var resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Display the search term
  var result = document.createElement("p");
  result.textContent = "Search Results: " + searchTerm;
  resultsContainer.appendChild(result);
  // Add more logic to display actual search results
}
//add to cart
// JavaScript for cart functionality
let cartCount = 0;

function toggleCart() {
  const cartDropdown = document.getElementById("cart-dropdown");
  cartDropdown.style.display =
    cartDropdown.style.display === "none" || cartDropdown.style.display === ""
      ? "block"
      : "none";
}

function addToCart(itemName, itemPrice) {
  // Increment cart count
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;

  // Add item to cart dropdown
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartItem = document.createElement("li");
  cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
  cartDropdown.appendChild(cartItem);
}

// Function to submit the order (you can customize this part based on your needs)
function submitOrder() {
  // Your order submission logic here
  alert("Order submitted successfully!");
  const deliveryTime = document.getElementById("deliveryTime").value;
  window.location.href = "payment.html";
}
//payment
function processPayment() {
  // Simulate payment processing logic
  alert("Payment processed successfully!");

  // After successful payment, navigate to the tracking page
  window.location.href = "tracking.html";
}

//for pop-up login form on click button

function showModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".form-box").classList.add("showoForm-box");
}
function closeModal() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".form-box").classList.remove("showoForm-box");
}
var btnlogin = document.querySelector(".sign-in");
btnlogin.addEventListener("click", showModal);

var close = document.querySelector("span");
close.addEventListener("click", closeModal);



