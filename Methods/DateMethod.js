let MyDate = new Date();

// console.log(new Date(2024,2,11).toString()); //parameter should be same for ggetting the write value
// console.log(new Date("2024-03-11").toString());
// console.log(typeof(MyDate));

// console.log(MyDate.toString());

// console.log(MyDate.toISOString()); //

// console.log(MyDate.toLocaleDateString()); // returns the local date like 11/3/2024
// console.log(MyDate.toLocaleTimeString()); // returns the local time

console.log(MyDate.toLocaleString('default', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
})); // returns the local date and time

// console.log(MyDate.toTimeString()); // returns the local time

// console.log(MyDate.getTime()); // returns the local time in milliseconds

// console.log(MyDate.getTimezoneOffset()); // returns the local time zone offset

// console.log(Date.now()); // timestamp in miliseconds since 1st January 1970 

// //to convert in seconds 

// console.log(Math.round(Date.now()/1000)); // timestamp in seconds since 1st January 1970