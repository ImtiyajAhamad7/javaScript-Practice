// spread operater in es6

// mostly used in array

// syntax is same as rest parameter

// replace appply method

// const sum = (a,b,c) => { console.log(`${a+b+c}`)};

// let x = [1,2,4];
// console.log(...x); //to get the values of arrays
// sum.apply(null, x); //before es6 we use apply method 

// sum(1,2,3);

// sum(...x); //now we can pass using spread operator

//----------------------------------------------------------------

//replace the concat method

// let arr1 = [1,2,3];
// const arr2 = [4,5,6];

// console.log(arr1.concat(arr2));
// arr1 = [...arr1,...arr2];
// console.log(arr1) // es6 we use concat

//----------------------------------------------------------------
//copy

 const arr3 = [1,2,3];
//  const arr4 = arr3;

// arr4.push(4,5);  //push the number in both arrays
// console.log(arr3);  
// console.log(arr4);

// es6 feature
const arr4 = [...arr3,4,5];

console.log(arr4);
console.log(arr3);



