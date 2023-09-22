let person = new Object();
console.log(person);

//computed member access
person['name'] =  'ar';
person['addr'] = 'sylhet';
console.log(person['name']);
// member access
console.log(person.addr);

//object literal
let anotherPerson = {
    name: 'holy',
    address: 'sunamganj',
    age: '25',
    b: function b(){
        return 2021-45;
    },
};
// property
// anonions function, method
console.log(anotherPerson);
console.log(anotherPerson.address);
console.log(anotherPerson.b());