
// default parameters
function calculateSalary(salary, tex = 0.25, bunas = 0){
    const remaining = salary - salary * tex;
    const total = remaining + bunas;
    return total
}

// template string 
const elementHTML = `
    <h1>name</h1>
    <p>Address</p>
    <p>salary: ${calculateSalary(1000, 0, 0)} </p>

`

// arrow function 
const doubleIt = x => x* 2;


// spreead operator
const numbers = [12, 24, 54, 65, 11]
const newNumber = [...numbers, 23, 454, 85]


//destructuring 
//object destructuring
const {x, y, z} = {x: 50, y: 100, z: 300, f: 250, ami: 0}

// array destructuring 
const [a, b, c, ...f] = [12, 43, 54, 76, 54, 123, 49];

