
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

const keys = Object.keys(bottle)
// console.log(keys)
const values = Object.values(bottle)
// console.log(values);

const entries = Object.entries(bottle)
// console.log(entries)
// Object.seal(bottle)
Object.freeze(bottle)
delete bottle.isCleaned;
console.log(bottle)