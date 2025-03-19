// Object Destructuring

const person = {
    firstName : "Saranya",
    lastName : "Jayakumaran",
    age : 35,
    favColor:'blue',
    isWorking : false,
    children : {
        elder: "vaishnavi",
        younger: "vishrudh",
    },
    fullName : function() {
       //return this.firstName + '' + this.lastName;
       return ` ${this.firstName} ${this.lastName}`;// template literal
    },
}

//Special variable
const { firstName , lastName ,favColor = 'red'} = person

console.log(firstName,lastName, favColor );