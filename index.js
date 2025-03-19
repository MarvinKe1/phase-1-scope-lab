// Write your solution in this file!
// Declare customerName in global scope and initialize to 'bob'
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicit global declaration
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'Alice';

// Function to attempt to reassign leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; // This will throw an error
}
np