// practic problem
// solove 1
const result = (num1, num2, num3) => num1 * num2 * num3;
// console.log(result(10, 10, 10))

// solve 2
const string = `
    I am a web developer.
    I love to code.
    I love to eat biryani.
// `
// console.log(string);

// solve 3 arrow function default parameter
const sum = (num1, num2 = 10) => num1 + num2;
// console.log(sum(10))

// Practice Problem 2
// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const friends = ['amena nur', 'fatema', 'rayhan', 'sharif', 'abdullah al mamun']

const friend = (friends) =>{
    const evenFirend = []
    for(const fd of friends){
       if(fd.length % 2 == 0){
        evenFirend.push(fd)
       }
    }

    return evenFirend;
}
console.log(friend(friends))