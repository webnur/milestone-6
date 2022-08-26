const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(number => number % 5 === 0);
// console.log(fives);
const fivesAll = numbers.filter( number => number % 5 === 0);
// console.log(fivesAll)


const products = [
    {id: 1, name: 'laptop', price: 47000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 27000},
    {id: 1, name: 'tablet', price: 2300},
]


const items = products.find(product => product.price > 40000);
console.log(items)