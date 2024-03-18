let asyncFun = (l) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(`it returns the data ${l}`);
            console.log(`your data ${l} is resolved`);
        }, 4000);
    });
};

(async ()=>{
    console.log(`waiting for the data 1`);
    const data1 = await asyncFun(1);
    console.log(`Received data 1:`, data1);

    console.log(`waiting for the data 2`);
    const data2 = await asyncFun(2);
    console.log(`Received data 2:`, data2);

    console.log(`waiting for the data 3`);
    const data3 = await asyncFun(3);
    console.log(`Received data 3:`, data3);

    console.log(`waiting for the data 4`);
    const data4 = await asyncFun(4);
    console.log(`Received data 4:`, data4);
})();
