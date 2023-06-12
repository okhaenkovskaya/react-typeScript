const isActive: boolean = true;
const heading: string = 'My Heading';
const year: number = 20;
const n: null = null;
const u: undefined = undefined;
const sizes: number[] = [3,7,10,15];
const iceCream: object = {
    size: "Xl",
    flavor: "Vanilla"
};

let tupleX: [string, number];
tupleX = ["colors", 48]

function printSizes(obj: { size: string }): object {
    return obj;
}
printSizes({size: "10"})

function printError(): void {
    console.log('Error')
}

interface Pet {
    name: string;
    age: number;
    legs: number | boolean;
    hasWool: boolean;
    colors: Colors[]
}

type Colors = {
    name: string;
    hex: string;
}

function callPet(animal: Pet): string {
    return `Hi it's ${animal.name}, it's ${animal.legs}legs`;
}

function sum(x: number, y: number): number {
    return x + y;
}

function printInfo(name: string, numb: number = 4): void {
    console.log(`${name} has ${numb} bags`)
}

function identity <T>(value: T) : T {
    return value;
}

function sayHi(name?: string) : string {
    return `Hi, ${name} glad to see you!`
}

function descriptionFavoriteColors(name: string, ...colors:string[]) : string {
    let myColors = colors.join(', ');
    return `My name ${name}. My Favorite colors: ${myColors}`
}

console.log(descriptionFavoriteColors("Ksu", 'red', "blue", "pink"))

console.log(identity<Number>(1))
console.log(identity<String>("1"))
console.log(identity<number[]>([1, 2]))

enum Seasons {
    Winter ,
    Spring,
    Summer,
    Autumn
}
let currentSeasons: string = Seasons[1];

let newProp: unknown = 4;
let moreProp: any = "new prop";

type User = {
    name: string;
    email: string;
    id: number | string;
    age: number;
    address?: string;
}

let newUser = {
    name: "Ksu",
    email: "test48@test48.com",
    id: 459987,
    age: 7,
}

interface Technique {
    manufacturer: string;
    country: string;
    year: number;
    sku: number;
    price: string;
}

interface Ipad extends Technique {
    model: string;
    display: string;
}

interface Car extends Technique {
    engine: string;
    weight: number;
}

interface Post {
    title: string;
    body: string;
    views: number;
    image: Image;
}

type Image = {
    url: string;
    alt: string;
}