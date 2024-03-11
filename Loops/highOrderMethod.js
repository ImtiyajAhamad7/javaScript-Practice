let arr = [2,3,4,5,6,7,8];
// console.log(`before filter ${arr}`);
// let t = arr.filter((item,index, arr)=>{                                   //returns a new array after filtering out items on specified condition
//     console.log(`element ${item} at index ${index} in array ${arr}`);
//     return item % 2 === 0;
// })

// console.log(`after filter ${arr}`);
// console.log(t);



// let x = arr.map( (item) => {          //map every element and returns an ew array
//     return item+1;                               
// })

// console.log(`after mapping ${x}`);

//-------------------------------------------reduce

// let y = arr.reduce((acc, item) => {
//     return acc+item;
// },0);
// console.log(y);


// const shoppingCart = [
//     {
//         name:'javascript',
//         price:999 
//     },

//     {
//         name:'python',
//         price:1999 
//     },

//     {
//         name:'java',
//         price:1999 
//     },

//     {
//         name:'c',
//         price:599 
//     },

//     {
//         name:'c++',
//         price:1234 
//     }
   
// ];

// let total = shoppingCart.reduce((acc, item) => {return acc+item.price;},0);
// console.log(total);


//array.sort() methodd
arr.sort((a,b) => a-b)   
console.log(arr)

