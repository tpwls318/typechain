// interface is not in JS, so you can use class instead
// interface Human {
//     name: string;
//     age: number;
//     gender: string
// }
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const Sergei = new Human("Sergei", 24, "male");


const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age} and you are ${person.gender}`;
}

console.log(sayHi(Sergei));


export {};