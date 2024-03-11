// let t = arr.filter((item,index, arr)=>{                                   //returns a new array
//     console.log(`element ${item} at index ${index} in array ${arr}`);
//     return item % 2 === 0;
// })


// console.log(t);

// let x = arr.map( (item) => {       
//     return item+1;                               //returs a new array
// })

// console.log(x);

// let y = arr.reduce((acc, item) => {
//     return acc+item;
// },0);
// console.log(y);


const shoppingCart = [
    {
        name:'javascript',
        price:999 
    },

    {
        name:'python',
        price:1999 
    },

    {
        name:'java',
        price:1999 
    },

    {
        name:'c',
        price:599 
    },

    {
        name:'c++',
        price:1234 
    }
   
];

let total = shoppingCart.reduce((acc, item) => {return acc+item.price;},0);
console.log(total);

