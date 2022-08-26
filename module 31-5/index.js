
let name = 'Nurul Islam';
const wifeName = 'Amena Sultana Nur';

const student = {
    name: 'Muslima islam',
    age: 12,
    job: 'student',
    
}

// template string 
const TemplateString = `${name} is  ${wifeName}'s, husband and ${student.name} is his doughter`;
// console.log(TemplateString)

const sum = number => number / 5;
// console.log(sum(50))

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const relust = (num1, num2) => {
    const output1 = num1 + 2;
    const output2 = num2 + 2
    const multifly = output1 * output2;
    return multifly;
}

// console.log(relust(10, 10))

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const relust1 = (num1, num2, num3) =>{
    return num1 * num2 * num3
}

// console.log(relust1(10, 10, 10))

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 


// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [10, 43, 65, 23, 10, 62, 14, 86, 34];
const number = numbers.map(relust => relust * 5);
// console.log(number)

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const oddNumber = numbers.filter(relust => relust % 2 === 1);
// console.log(oddNumber)

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    {id: 1, name: 'mobile', price: 10000},
    {id: 1, name: 'smart watch', price: 5000},
    {id: 1, name: 'lenovo laptop', price: 100000},
    {id: 1, name: 'dell leptop', price: 900000},
]

const spacificPrice = products.find(product => product.price <= 5000)
// console.log(spacificPrice)

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 



// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
const {user} = {id: 1, user: 'amena nur', age: 20}
// console.log(user)

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const [, , three] = [1, 2, 3, 4, 5, 6]
// console.log(three)


// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
const sum2 = (num1, num2, num3 = 7) => {
    return num1 + num2 + num3
}
// console.log(sum2(10, 10))

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const obj = {
    name: 'Amena Nur',
    age: 20,
    class: 12,
    marks: {
        math: 50,
        physics: 89,
        chemistry: 65
    }
}
// console.log(obj.marks.math)
const chemistry = obj['marks']['chemistry']
const physics = obj.marks.physics;
 const subject = 'math';
 const subjectResult = obj.marks[subject]
 console.log(subjectResult)
console.log(physics)
console.log(chemistry)

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
