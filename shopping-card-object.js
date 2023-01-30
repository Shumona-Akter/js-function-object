//  suppose ami jokhon khusi k shopping kore dibo . tar shopping items
var shoppingCard = {
    shoose : 350,
    ghori : 500,
    shari : 700,
    churi : 50,
    dul : 250,
    eyeLiner: 100,
    mashKara : 100,
    lipstick : 150,
}

// set object 
// sari jokhon 2000 tk kine dibo
shoppingCard.shari = 2000;
// console.log(shoppingCard);

shoppingCard["shoose"] = 1000;
// console.log(shoppingCard);

// Accessing Object Properties ........ assa ami jeno churi koitaka diye kine dite cheyesilam vule gesi

console.log(shoppingCard.churi);

// Accessing Object Properties ........ assa ami jeno lipstick koitaka diye kine dite cheyesilam vule gesi
console.log(shoppingCard["lipstick"]);

// keys of object
// assa ami jeno ki ki kine dite cheyesilam 
var shoppingItems = Object.keys(shoppingCard);
console.log(shoppingItems)
// values of object
// agulor dam ki ki silo
var shoppingPrice = Object.values(shoppingCard);
console.log(shoppingPrice);

// shopping card a jokhon for loop chalabo

for (var i = 0; i < shoppingItems.length; i++){
    var items = shoppingItems[i];
    var price = shoppingCard[items];
    console.log(items, ':', price);

}