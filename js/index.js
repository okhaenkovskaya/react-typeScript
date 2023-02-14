"use strict";
const isActive = true;
const heading = 'My Heading';
const year = 20;
const sizes = [3, 7, 10, 15];
function printSizes(obj) {
    return obj;
}
printSizes({ size: "10" });
function printError() {
    console.log('Error');
}
function callPet(animal) {
    return `Hi it's ${animal.name}, it's ${animal.legs}legs`;
}
function sum(x, y) {
    return x + y;
}
function printInfo(name, numb) {
    console.log(`${name} has ${numb} bags`);
}
function identity(value) {
    return value;
}
console.log(identity(1));
console.log(identity("1"));
console.log(identity([1, 2]));
console.log('modulo js 445');
