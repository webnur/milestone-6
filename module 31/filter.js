
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumber = numbers.filter(number => number > 20);
// console.log(bigNumber)
const tiny = numbers.filter(number => number < 10);
// console.log(tiny)

const even = numbers.filter(number => number % 2 === 0);
// console.log(even)

const odd = numbers.filter(number => number % 2 === 1);
// console.log(odd)



const products = [
    {id: 1, name: 'laptop', price: 47000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 27000},
    {id: 1, name: 'tablet', price: 2300},
]


const items = products.filter(product => product.price > 20000);
// console.log(items);