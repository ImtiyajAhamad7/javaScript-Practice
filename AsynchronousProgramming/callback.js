function getData(dataId, getNextData){
    
    setTimeout(()=>{
        console.log(`dataId: ${dataId}`);

        if(getNextData){
            getNextData();
        }
        
    },2000)
}

// exaple of callback hell 
//in this exaple  there is a problem with the call back hell


getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{

        });
    });
});

