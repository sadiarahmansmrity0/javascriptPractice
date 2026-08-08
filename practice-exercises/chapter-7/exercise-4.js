//4. Write a function that takes an array of product objects and returns the total stock using reduce.
// Exercise 4: Calculate total inventory stock using Array.prototype.reduce()
const inventory = [
    { product: "Notebook", stock: 40 },
    { product: "Gel Pen", stock: 100 },
    { product: "Backpack", stock: 7 }
];

const getTotalStock = (items) => items.reduce((total, currentItem) => total + currentItem.stock, 0);
console.log("Total Items in Stock:", getTotalStock(inventory)); // Output: 147