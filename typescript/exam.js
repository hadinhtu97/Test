let examString = '1';
let examNum = 2;
function double(a) {
    return a * 2;
}
double(1);
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
// Write your code below:
var Pet;
(function (Pet) {
    Pet["Hamster"] = "HAMSTER";
    Pet["Rat"] = "RAT";
    Pet["Chinchilla"] = "CHINCHILLA";
    Pet["Tarantula"] = "TARANTULA";
})(Pet || (Pet = {}));
let petOnSaleTS = Pet.Chinchilla;
let ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
console.log(petOnSaleTS)
console.log(typeof petOnSaleTS)