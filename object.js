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

// set properties
mySelf.eye = "black";
console.log(mySelf);

mySelf["hear"] = "gold";
console.log(mySelf)