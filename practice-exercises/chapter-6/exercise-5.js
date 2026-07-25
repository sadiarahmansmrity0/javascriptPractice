//5. Combine filter + map: from an array of students with cgpa, produce an array of names of students with cgpa $\ge 3.5$.

const MUStudents = [
    { name: "Tanvir", cgpa: 3.6 },
    { name: "Rafi", cgpa: 3.2 },
    { name: "Sadia", cgpa: 3.9 },
    { name: "Asha", cgpa: 3.4 }
];

const highAchievers = MUStudents
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(highAchievers); // Output: ['Tanvir', 'Sadia']