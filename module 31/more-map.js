

const numbers = [13, 56, 87, 44];
const half = numbers.map(number => number / 2);
const thirds = numbers.map(number => number /3)
// console.log(half);
// console.log(thirds);


const friends = ['Tom Hanks', 'Tom candy', 'Tom Brady', 'Tom Sulaiman'];

const friendLetters = friends.map(friend => friend[0]);
// console.log(friendLetters);
const friendLength = friends.map(friend => friend.length)
// console.log(friendLength)

const products = [
    {id: 1, name: 'laptop', price: 47000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 27000},
    {id: 1, name: 'tablet', price: 2300},
]

const items = products.map(product => product.name);
// console.log(items)
