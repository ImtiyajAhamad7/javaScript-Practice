//object is an instance of a class
// constructor is called autometatically
//hoisting is not supported by class

// var object = new Object();
// object.name = "John";
// object.age = 30;
// object.job = "Developer";

// console.log(object.name);


class Students{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getJob(){
        return this.job;
    }
}

let student1 = new Students("John",30,"Developer");
console.log(student1.name);

