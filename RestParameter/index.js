const restPara = (x,d,...a) =>{    //we use triple dot in parameter , parameter takes values as an array
    console.log(a);   //  prints the array of parameters
    console.log(...a) // prints the numeric array of parameters
    console.log(`the value of x is ${x} and the value of d is ${d}`);   //  first value of argument aasign to x and second assign to d and rest is assigned to a
    console.log(`${a[0]}`);
    console.log(`length of a is  ${a.length}`);
    console.log(`${a.indexOf(3)}`);
}

restPara(1,2,3,4,5,6,7)