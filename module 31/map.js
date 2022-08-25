
const numbers = [2, 8, 4, 6, 3];

function getDoubleIt(numbers){
    const outPut = [];
    for(const number of numbers){
        const double = doubleItOld(number);
        outPut.push(double)
    }
    return outPut;
}

function doubleItOld(num){
    return num * 2;
}
// console.log(getDoubleIt(numbers))


const doubleId = num => num * 2;

const makeDouble = numbers.map(number => doubleId(number))
// console.log(makeDouble)

const makeDoubleDirect = numbers.map(number => number * 2)
// console.log(makeDoubleDirect);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)

/* 
purpose the map in array 

1. get an array
2. for every elements of the array do something 
3. store the result in an array 
4. return the result array

*/