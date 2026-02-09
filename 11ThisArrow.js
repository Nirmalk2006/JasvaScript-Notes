                     
                     // this keyword      
                     
// we can access current context values so we can use "this" keword
                     
let users = {
    username : "Nirmal",
    age : 18,
    welcome : function() {
        console.log(`${this.username} welcome`)
    },
     

}
console.log(users);


users.welcome();
users.username = "dany";
users.welcome();
console.log(this);

                            //arrow functions
let add = (name) => {       
    return name;  //Explicit return
}
console.log(add("Nirmal"));

let sub = (num1,num2) =>  num1 - num2;        //implicit arrow function we can also use () parenthesis

console.log(sub(3,2));

// returning object in arrow function
let getObject = (num1,num2) => ({name:"Nirmal", age:19});
console.log(getObject());


                            //Immidiately Invoked Function Expression (IIFE)

(function (name){                           //An IIFE is a function that runs immediately after it is created.                                         
     console.log(`DB connected ${name}`)   // It is a design pattern that is often used to create a new scope and avoid polluting the global namespace.
}                                          //not called by name it is called by itself  
) ('NIrmal');
    

(()=>{
    console.log(`DB connected two ${name}`);     //we can also use arrow function in IIFE
})()