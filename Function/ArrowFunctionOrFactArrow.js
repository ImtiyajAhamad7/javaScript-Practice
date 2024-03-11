// fat arrow funcctions

// before es6 we declare function like this

// var sum  = function(){
//     var a = 10;
//     var b = 20;
//     return a + b;
// }

// console.log(sum());

// es6
// for single line function
// let a;
// let b = 20;
// const sum = (b) =>a+b ;  //arrow function
// console.log(sum(30));  // passing only the b's value

// for multi line function

// const sum2 = () => {
//     let a = 10;
//     let b = 20;
//     return a + b;
// }

// const ans = (a, b=20) => {
//     console.log(`the multiplication of two nuumbers is ${a*b}`);
// }

// ans(20);





// ------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];

// console.log(typeof arr === 'object' ? arr : `not an object`);