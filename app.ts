const isActive: boolean = true;
const heading: string = 'My Heading';
const year: number = 20;
const sizes: number[] = [3,7,10,15];

function printSizes(obj: { size: string }) {
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
    colors: []
}

function callPet(animal: Pet) {
    return `Hi it's ${animal.name}, it's ${animal.legs}legs`;
}

function sum(x: number, y: number): number {
    return x + y;
}

function printInfo(name: string, numb: number) {
    console.log(`${name} has ${numb} bags`)
}

function identity <T>(value: T) : T {
    return value;
}

console.log(identity<Number>(1))
console.log(identity<String>("1"))
console.log(identity<number[]>([1, 2]))