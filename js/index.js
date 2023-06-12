const isActive = true
const heading = "My Heading"
const year = 20
const n = null
const u = undefined
const sizes = [3, 7, 10, 15]
const iceCream = {
    size: "Xl",
    flavor: "Vanilla"
}

let tupleX
tupleX = ["colors", 48]

function printSizes(obj) {
    return obj
}
printSizes({ size: "10" })

function printError() {
    console.log("Error")
}

function callPet(animal) {
    return `Hi it's ${animal.name}, it's ${animal.legs}legs`
}

function sum(x, y) {
    return x + y
}

function printInfo(name, numb = 4) {
    console.log(`${name} has ${numb} bags`)
}

function identity(value) {
    return value
}

function sayHi(name) {
    return `Hi, ${name} glad to see you!`
}

function descriptionFavoriteColors(name, ...colors) {
    let myColors = colors.join(", ")
    return `My name ${name}. My Favorite colors: ${myColors}`
}

console.log(descriptionFavoriteColors("Ksu", "red", "blue", "pink"))

console.log(identity(1))
console.log(identity("1"))
console.log(identity([1, 2]))

var Seasons

;(function(Seasons) {
    Seasons[(Seasons["Winter"] = 0)] = "Winter"
    Seasons[(Seasons["Spring"] = 1)] = "Spring"
    Seasons[(Seasons["Summer"] = 2)] = "Summer"
    Seasons[(Seasons["Autumn"] = 3)] = "Autumn"
})(Seasons || (Seasons = {}))

let currentSeasons = Seasons[1]

let newProp = 4
let moreProp = "new prop"

let newUser = {
    name: "Ksu",
    email: "test48@test48.com",
    id: 459987,
    age: 7
}
