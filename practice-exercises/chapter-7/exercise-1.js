//1. Model yourself as an object with name, dept, semester, and skills (an array). Print a sentence using its properties.

const developerProfile = {
    name: "Sadia Rahman",
    dept: "CSE",
    semester: "4th",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "SQL"]
};

console.log(`${developerProfile.name} is structuralizing her frontend track with core skills like ${developerProfile.skills.slice(0, 3).join(", ")}.`);