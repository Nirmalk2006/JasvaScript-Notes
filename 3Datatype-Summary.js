 /*primitive datatypes in js  There are  7 primitive datatypes in js
      1.Number 2.Boolean 3.Null 4.Undefined 5.String 6.Symbol 7.BigInt */


 id = Symbol('123');
const gid = Symbol('123');   // defining symbol datatype this datatype is used to create unique identifiers

console.log(id);
console.log(gid);
console.log(id == gid);
console.log(typeof id);
let num = 76726343134567890345763776n ;    // Defining BIgInt Datatype 
console.log(num); 


/*Non primitive datatypes in javascript
        1.Object 2.Array 3.Function
*/

const name = ["NIrmal","katik"];
console.log(typeof name);     
function name() { 
    return "nirmal";
}
console.log(typeof nam());
console.log(typeof myobj);
