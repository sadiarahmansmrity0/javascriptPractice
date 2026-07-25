//2. Add a method describe() to that object that returns a summary string using this.

developerProfile.describe = function() {
    return `${this.name} is structuralizing her track in ${this.dept} (Semester: ${this.semester}).`;
};

console.log(developerProfile.describe());