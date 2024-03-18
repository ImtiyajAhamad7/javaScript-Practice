// const myproglange = ['js', 'php', 'java', 'pythons', 'dotnet']

// for storing the array elements we can use this method in ES6
// let[top1, top2, top3, top4, top5, top6] = myproglange;

// console.log(top1);

// for getting the first and last elements of the array

// before es6 we use this method to get the first and last elements
// console.log(myproglange[0]);
// console.log(myproglange[myproglange.length - 1]);

// es6 we can use this method to get the first and last elements

// console.log(myproglange.length);

//  let [top1,,,,last] = myproglange;         //this is how we can escape array elements
//  console.log(`my first language is ${top1} and my last language is ${last}`);

// let[top1,, top2] = myproglange;
// console.log(`first is ${top1}  and last is ${top2}`);


//  swap two numbers without using third varialbe

// let c = 5;
// let e = 7;
// console.log(`before swaping ${c} and ${e}`);

// first logic
// c = c+e;
// e = c-e;
// c = c-e;

//using array destructuring

//  [c,e] = [e,c]

// console.log(`after swapping ${c} and ${e}`);
