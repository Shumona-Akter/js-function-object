var mySelf = {
    firstName : "Sumona",
    lastName : "akter",
    weight : 47,
    Height : 5.2,
    hear : "brown",
    eye : "brown"
}

// Accessing Object Properties. You can access object properties in two ways
/* objectName.propertyName
objectName["propertyName"]
*/
// eye propertyr value jante
console.log(mySelf.eye);
console.log(mySelf["weight"]);
var properties = "lastName";
console.log(properties);

// set object propertis properties
mySelf.eye = "black";
console.log(mySelf);

mySelf["hear"] = "gold";
console.log(mySelf);

// object a joto gulo property ase tader sob gulor nam jante and ata array akare property nam dibe

var propertyNames = Object.keys(mySelf);

console.log(propertyNames)
// object a joto gulo value ase tader sob gulor man jante and ata array akare property nam dibe;
var propertyName = Object.values(mySelf)
console.log(propertyName)
