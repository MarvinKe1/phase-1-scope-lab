// Write your solution in this file!
// Declare a variable in global scope called customerName using var
var customerName = 'bob';

// Write a function that accesses the global customerName and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // This will implicitly declare bestCustomer in global scope
}

// Write a function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope and try to change it
const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  // This will throw an error because you cannot reassign a constant
  leastFavoriteCustomer = 'Bob';
}
console.log(customerName); // Check initial value
upperCaseCustomerName();
console.log(customerName); // Check after uppercasing
setBestCustomer();
console.log(bestCustomer); // Check after setting bestCustomer