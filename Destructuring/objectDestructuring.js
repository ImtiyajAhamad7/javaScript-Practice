const bioData = {
    name: 'imtiyaj',
    age: 21,
    occupation: 'Software Engineer',

    hobbies: {
        hobbies1: 'coding',
        hobbies2: 'playing'
    }
}

// before es6
// console.log(`before es6 my name is ${bioData.name}`);

// after es6

 let {name:myName, age, occupation, hobbies} = bioData;   //we have to give same name for the variable as declare in the object but there is a way we can rename like name:newName

 console.log(`after es6 my name is ${myName} and age is ${age} and occupation is ${occupation} and my hobbies is ${hobbies.hobbies1}`);

//  we can declare like this also

//  let name:myName, age, occupation;
//  ({name, age, occupation}= bioData);
//  console.log(`after es6 my name is ${names} and age is ${age} and occupation is ${occupation}`);


