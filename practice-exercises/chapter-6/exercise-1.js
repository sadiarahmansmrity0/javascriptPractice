// 1. Given [3, 7, 2, 9, 4], print the largest number using a loop (no Math.max).

const nums = [3, 7, 2, 9, 4];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log("Max item:", max); // Output: 9