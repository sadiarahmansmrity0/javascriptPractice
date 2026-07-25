//3. Use filter to keep only names longer than 4 characters from an array of names.

const names = ["Asha", "Tanvir", "Mim", "Nabila", "Rafi"];
const longNames = names.filter(name => name.length > 4);
console.log(longNames); // Output: ['Tanvir', 'Nabila']