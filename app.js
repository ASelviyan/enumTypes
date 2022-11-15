//ENUM is a list that helps you identify constant through numbers or strings
//EX: enum nameOfList {identifiers}
//behind the scenes these identifiers are counted numerically so ADMIN is 0, READ_ONLY is 1 and AUTHOR is 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//unless you give these identifiers there own values to be identified with
// the identifiers can use string and number values to identify them selves 
//enum Role {ADMIN = 4, READ_ONLY = 'Read_Only', AUTHOR = 200}
var person = {
    name: "Angelika",
    age: 22,
    hobbies: ['Video games', 'Reading'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
