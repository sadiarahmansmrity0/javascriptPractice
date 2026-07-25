//2. Use map to convert an array of taka amounts into strings like '450 BDT'.

const amounts = [100, 450, 1200];
const formattedAmounts = amounts.map(amount => `${amount} BDT`);
console.log(formattedAmounts); // Output: ['100 BDT', '450 BDT', '1200 BDT']