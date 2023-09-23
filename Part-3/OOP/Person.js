class Person{
    name;
    age;
    dateOfBirth;
    isMarried;
    constructor(name, age, dob, isMarried){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dob;
        this.isMarried = isMarried;
    }

    updateName(name){
        this.name = name;
    }
}

let rakibOb = new Person("Rakib", 25, 1995, false);
let mahmudOb = new Person("Mahmud", 35, 1985, true);

rakibOb.updateName("Rir Rakib");

console.log(rakibOb);
console.log(mahmudOb);