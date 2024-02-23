
// Create an array called fruits containing the names of different fruits
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Access and show elements of the array in an unordered list on the screen
document.write("<ul>");
fruits.forEach(function(fruit) {
    document.write("<li>" + fruit + "</li>");
});
document.write("</ul>");





// Create an array called numbers containing some numerical values
var numbers = [1, 2, 3, 4, 5];

// Function to handle click event for adding an element
document.getElementById("addBtn").addEventListener("click", function() {
    var newNumber = parseInt(prompt("Enter a number to add:"));
    if (!isNaN(newNumber)) {
        numbers.push(newNumber);
        console.log("Array after adding:", numbers);
    } else {
        console.log("Invalid input. Please enter a number.");
    }
});

// Function to handle click event for removing an element
document.getElementById("removeBtn").addEventListener("click", function() {
    var indexToRemove = parseInt(prompt("Enter the index of the number to remove:"));
    if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < numbers.length) {
        numbers.splice(indexToRemove, 1);
        console.log("Array after removing:", numbers);
    } else {
        console.log("Invalid index. Please enter a valid index.");
    }
});

// Function to handle click event for finding the index of an element
document.getElementById("findBtn").addEventListener("click", function() {
    var numberToFind = parseInt(prompt("Enter the number to find its index:"));
    var index = numbers.indexOf(numberToFind);
    if (index !== -1) {
        console.log("Index of", numberToFind, ":", index);
    } else {
        console.log(numberToFind, "not found in the array.");
    }
});
