//5. Stringify an object, then parse it back, and prove the round trip worked by printing a property.

const assignmentInfo = { title: "KeenKeeper Project", status: "Completed" };

const jsonString = JSON.stringify(assignmentInfo);
console.log(jsonString); // Output: {"title":"KeenKeeper Project","status":"Completed"}

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.title); // Output: KeenKeeper Project (Round trip verified)