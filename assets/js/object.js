// object

//Object constructor

const objName = new Object() // syntax object constructor

const objName2 = {} // synatx object literal 

const person = {
    firstName : "Saranya",
    lastName : "Jayakumaran",
    age : 35,
    isWorking : false,
    fullName : function() {
       //return this.firstName + '' + this.lastName;
       return ` ${this.firstName} ${this.lastName}`;// template literal
    },
}

// getting object values

document.getElementById('fullname').innerHTML = person.firstName + person.lastName;
document.getElementById('fullname').innerHTML = person.fullName();

console.log("First Name:" , person.firstName);
console.log("Last Name:" , person.lastName);

person.fullName();

