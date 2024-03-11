let x = [1,1,2,2,3,2,4,5,6,7,6,5,4,3,2];


let map  = new Map();

// map.set('name', "imtiyaj");  //for giving the value

// for getting key and value we can use for of loops

// for(let [key, value] of map){
//     console.log(`key: ${key}, value: ${value}`);
// }

for(let i of x){
    if(map.has(i)){
        map.set(i, map.get(i)+1);
    }else{
        map.set(i, 1);
    }
}

for(let [key, value] of map){
    console.log(`key: ${key}, value: ${value}`);
}

