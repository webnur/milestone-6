
const numbers = [12, 43, 65, 76, 87];

// for(const number of numbers){
//     console.log(number)
// }


// 1: for of can not used with Objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

// first option to loop through an object
const keys = Object.keys(bottle)

/* 
3 ways to read Object properties
bottle.color
bottle['color']
bottle[variable name]

*/

// for(const key of keys){
//     console.log(key, bottle[key])
// }

// use for in loop for using object loop

for(const key in bottle){
    //console.log(key, bottle[key])
}

// advanced

const pair = Object.entries(bottle)

for(const[key, value] of Object.entries(bottle)){
    console.log(key, value)
}