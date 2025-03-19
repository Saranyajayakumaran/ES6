// object

//Object constructor

const objName = new Object() // syntax object constructor

const objName2 = {} // synatx object literal 

const person = {
    firstName : "Saranya",
    lastName : "Jayakumaran",
    age : 35,
    isWorking : false,
    hobbies:["watching tv","photography"],
    children : {
        elder: "vaishnavi",
        younger: "vishrudh",
    },
    fullName : function() {
       //return this.firstName + '' + this.lastName;
       return ` ${this.firstName} ${this.lastName}`;// template literal
    },
}

person.favcolor = "red";
person.hobbies[2] = "singing";
// getting object values

//document.getElementById('fullname').innerHTML = person.firstName + person.lastName;
//document.getElementById('fullname').innerHTML = person.fullName();




//console.log("First Name:" , person.firstName);
//console.log("Last Name:" , person.lastName);

//person.fullName();


//console.log(person.children.elder);
//document.getElementById('fullname').innerHTML = person.children.elder;


// object merging

const pesronMethods = {
    yearofBirth() {
        console.log (new Date().getFullYear() - this.age)
    },
    favNumbers: [2,4,6,8,10],
    get favNumbersLength(){
        return this.favNumbers.length
    }
}

//Object.assign(person,pesronMethods) // object merging method

const finalObj = {...person, ...pesronMethods} // object merging using spread operator 

console.log(finalObj);

//console.log(person.yearofBirth());


//object cloning

const objectCopied = Object.assign({}, person) // create duplicate object

person.firstName = 'Trisha'
person.age = 42

//console.log(person, objectCopied)


//delete object

//delete person.hobbies

//console.log(person);


// object property initializer

//function getFullName(firstName,lastName){
    //return{
        //firstName,
        //lastName
    //}
//}

//console.log(getFullName('saranya', 'jayakumaran'))

console.log(person.favNumbersLength)

//get accessor


