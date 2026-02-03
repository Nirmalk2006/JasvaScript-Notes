
let name = "edf";
console.log(typeof name)       //output: "String"  Using the typeof operator we can access the type of the variable
let con = Number(name)         //using this statement we can change the type of vaiable name to Number
console.log(con)               //output is "NaN" because the name variable cant store the number
console.log(typeof 32 === "number") //output "true" because 32 is of type number

//String to Number Conversion
let str1 = "123"
let str2 = "456abc"
let num1 = Number(str1)       //converting str1 to number
let num2 = Number(str2)       //converting str2 to number
console.log(num1)             //output: 123
console.log(num2)             //output: "NaN" because str2 contains non-numeric characters

//Examples of type coercion in JavaScript
let value = 3
let negval = -value;
console.log(negval);
console.log("1"+2);  //output: "12"
console.log(2+"1");   //output: "21"
console.log(2+2+"1");   //output: "41" because 2+2 is evaluated first to 4, then concatenated with "1"
console.log(true); //output: true
console.log(+true); //output: 1 because unary plus converts true to 1
console.log(+""); //output: 0 because unary plus converts empty string to 0
let gamecount = 100;
gamecount--;  //decrementing gamecount by 1
console.log(gamecount); //output: 99