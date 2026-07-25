//6. Sort an array of objects by price from highest to lowest.

const itemsList = [
    { name: "Book", price: 450 },
    { name: "Pen", price: 15 },
    { name: "Bag", price: 1500 }
];

itemsList.sort((a, b) => b.price - a.price);
console.log(itemsList);
// Output: Bag (1500), Book (450), Pen (15)