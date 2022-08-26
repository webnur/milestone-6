
// 1: defaout parameter

function sum (num1, num2 = 10){
    return num1 + num2
}
// sum()

// 2: template string 
const tags = `
    <h1>Hello <h1>
    amar mon valo nei
    ami tumake miss kori
`

const fisrtName = 'Nurul Islam';
const lastName = 'Tanvir';
const full = `${fisrtName} ${lastName}`

// 4: arrow function 

// single parameter arrow function
const sum1 = num => num + 10;
// console.log(sum(10))

// two parameter arrow function
const divition = (num1, num2) => num1 / num2;

// arrow functin with functin body
const multifly = (num1, num2) => {
    return num1 * num2;
}

// 4: array map

const numbers = [10, 15, 23, 21, 32, 65, 11];
const doubleIt = numbers.map(number => number * 2);
// console.log(doubleIt)


// 5: filter

const even = numbers.filter(number => number % 2 === 0);
// console.log(even)
const odd = numbers.filter(number => number % 2 === 1);
// console.log(odd)


// 6: find
const odd1 = numbers.find(number => number % 2 === 1);
// console.log(odd1)

//  Good To Have 

// 1: spread operator : [...numbers, 12344, 553, 342]
const moreNumbers = [...numbers, 123, 134, 432, 432];

// 2: destructuring 
// 2.1 Object destructuring. how to get property name as value
const {x, y} = {x: 'Nurul Islam', y: 'amena Nur', child: 'musliha Islam',};

// 2.2 array destructuring. 
const [a, b] = [10, 32, 13, 54];

const all = numbers.forEach(number => console.log( number * 2));
// console.log(all)

