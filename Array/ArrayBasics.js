// declaration of array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,5, 10];

// push method - it adds new element in the  last position of the array

// arr.push(11);

// console.log(arr);

// pop method - it removes the last element of the array & returns the popped element

// console.log(arr.pop());

// unshift method - it adds the new element to the starting position of the array

//  arr.unshift(12);
// console.log(arr);

// shift method - it removes the first element of the array & returns the shifted element
// console.log(`before : ${arr}`)
// arr.shift(1);
// console.log(arr);

//indexOf method - it returns the index of the array element (only first occurance of the elemnt if no element then returns -1)

// let x = arr.indexOf(12);   //no elemnt so return -1
// let x = arr.indexOf(1);   //return 0 index
// console.log(x);

// syntax for index off

// arr[index, index from(optional)]   index from == mean from which index we have to start our search


// const x = ["Aman", "Satyam", "Imtyiaj", "Priya", "Subh", "Shifa","Aman","Satyam"];

// console.log(x.indexOf("Aman",2));
// console.log(x.indexOf("Aman"));

// last index of array returns the last index of the array

// let x = arr.lastIndexOf(5)
// console.log(x);

 //reverse() //method reverses the order of the elements in an array.
//reverse() //method overwrites the original array.

// arr.reverse();

// console.log(arr);

// includes() checks whether the array contains the specified element and return boolean values. and it only works with premitive data types.

// console.log(arr.includes(2,3));   //arr.icludes(element, from where we have to search(optional))

//find method returns the first element its finds

// let arrObj = [
//     {
//         name: "Aman",
//         rn: 11
//     },
//     {
//         name: "imtiyaj",
//         rn: 30
//     },
//     {
//         name: "Satyam",
//         rn: 45
//     },
//     {
//         name: "Shifa",
//         rn: 46
//     },
//     {
//         name: "Priya",
//         rn: 40
//     }
// ]



// console.log(arrObj.find((element) =>{
//    return  element.rn >40;
// }))


// findIndex method returns the index of the first element that matches specified condition passed in callback function

// console.log(arrObj.findIndex((element) =>{
//      return  element.rn > 40;
// }))





/**
 * @param {object[]} results
 */
let returning = [];
function getPassingTests(results) {
     console.log(results);
 return returning =  results.filter((data)=>  
        data.grade>=10      
   ).map((data)=> data.grade);
//    console.log(returning);
   }
   

   


// sample usage (do not modify)
const data = [{
   id: 1,
   grade: 10
},
{
   id: 2,
   grade: 4
}, 
{
   id: 3,
   grade: 18
}]
let x = getPassingTests(data);
console.log(x);
