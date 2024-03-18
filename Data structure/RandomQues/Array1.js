


function generateArray(arr) {
    
    const newArray = [];
    
    for (let i = 0; i < arr.length; i++) {

        const sum = (arr[i - 2] || 0 )+ (arr[i - 1] || 0) + arr[i] + (arr[i + 1] || 0) + (arr[i + 2] || 0);
        newArray.push(sum);
    }
    
    return newArray;
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];


const resultArray = generateArray(inputArray);


console.log(resultArray);
