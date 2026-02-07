
let jsuser = {
    name: "Nirmal",
    age :25,
 //   [mysym] : "Key", //type is symbol
    occupation: "software Enginner",
    "full name" : "Nirmal kharche",

}    

//Accessing Object using (.notation)

console.log(jsuser.name);

//Accesing object by using ([] notation)
console.log(jsuser["occupation"]);


// Object.freeze(jsuser)
// jsuser.age = 26;      //IF the object is Freesze then we cannot modify the properties of that object
// console.log(jsuser);

jsuser.greet = function()
{
    console.log(`hello my name is ${this.name}`);
}

console.log(jsuser.greet());

jsuser.greet2 = function()
{
    console.log(`hello my name is ${this.age}`);
}

console.log(jsuser.greet2())
console.log(jsuser);
//----------------------------------------------------------------------

//const tinderuser = newobject()   these is singleton object
//const juser{} // these is non singleton object
let user =  {
       companyname : "capegemini",
       location : "pune",
       Name : {
           userfullname:{
            firstname: "Nirmal",
            LastName: "Kharche",
           }
       }
}
//console.log(user.Name.userfullname); //for optional chaining we can use "?" symbol

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}
let obj3 = {obj1,obj2};
console.log(obj3);
let obj = Object.assign(obj1,obj2); //// assign() method in array uses when the object is recurssively merges another object then the assign method is used
console.log(obj);

//but this time we can use Spread method

let obj4 ={...obj1, ...obj2};
console.log(obj4);
 
               //Object destructuring  is way extract properties from an object and assign them to variables in a single statement..

let details = {
        fullname : "Nirmal Kharche",
        age :18,
        companyname : "capegemini",
}

let {fullname:g,age}=details;  //Object Destructuring
console.log(age);
