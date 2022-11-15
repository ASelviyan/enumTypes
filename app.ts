//ENUM is a list that helps you identify constant through numbers or strings
//EX: enum nameOfList {identifiers}
//behind the scenes these identifiers are counted numerically so ADMIN is 0, READ_ONLY is 1 and AUTHOR is 2
enum Role {ADMIN, READ_ONLY, AUTHOR}


//unless you give these identifiers there own values to be identified with
// the identifiers can use string and number values to identify them selves 
//enum Role {ADMIN = 4, READ_ONLY = 'Read_Only', AUTHOR = 200}



const person = {
    name: "Angelika",
    age: 22,
    hobbies: ['Video games', 'Reading'],
    // the code below is taking the enum that was created and assigning the ADMIN identified to role 
    role: Role.ADMIN
}


//this if statement is checking if the role in the person object is in the enum list
//if it is then is print out a message 
if (person.role === Role.ADMIN){
    console.log('is admin')
}   