
// 1: create object using object literals importants

const player = {};
//paramiters
player.name = 'small nirob';
player.specialy = 'batsman';
// method
player.bat = function(){
    console.log('swing your bat')
}

// console.log(player)
// player.bat()

// maxium time use this type of object
const sutdent = {
    name: 'pandey',
    job: 'rose khai ande',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 10000,
}

// 2. object constructor 
const person = new Object()
// console.log(person)

// 3. object crate method

// const item = Object.create(null)
const atel = Object.create(sutdent)
// console.log(atel)

// 4: class,  importants
class Person {
    name = 'amena sultana';
    address = 'chandpur kachua';
    constructor(age){
        this.age = age
    }
}

const person1 = new Person(54);
console.log(person1)