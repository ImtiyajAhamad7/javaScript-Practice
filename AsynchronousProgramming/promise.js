let asyncFun = (l) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            // console.log(`returning promise number: ${l}`)
            resolve(`it returns the  data ${l}`  )
        },4000)
    })
}

// let asyncFun2 = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("second data")
//         },4000)
//     })
// }

// console.log("fetching the first promise details...");
// let p1 = asyncFun();
// p1.then((res)=>{
//     console.log(`promise fullfilled successfully for ${res}`);

//     console.log("fetching the second promise details...");
//     let p2 = asyncFun2();
//     p2.then((res)=>{
//         console.log(`promise fullfilled successfully for ${res}`);
//     });
// })



//there is problem with promise chaining in this exaple
console.log("fetching the 1 promise details...");
asyncFun(1).then((res)=>{
    
    console.log(`${res}`);
    console.log(`fetching data 2................................`)
   return asyncFun(2);
}).then((res)=>{ 
    console.log(`${res}`);

    console.log(`fetching data 3................................`)
    return asyncFun(3);
}).then((res)=>{ 
    console.log(`${res}`); 

    console.log(`fetching data 4................................`)  
    return asyncFun(4).then((res)=>{
            console.log(`${res}`);
    
    });
});