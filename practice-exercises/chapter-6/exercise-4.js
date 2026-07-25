//4. Use reduce to count how many numbers in an array are even.

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = items.reduce((count, current) => {
    return current % 2 === 0 ? count + 1 : count;
}, 0);
console.log(evenCount); // Output: 5