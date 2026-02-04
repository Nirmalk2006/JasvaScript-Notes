let fname = "nirmal";
let Lname = "Kharche";
console.log(`hello My name is ${fname} and My surname is ${Lname}`);
console.log(`hello My name is ${fname} and My surname is ${Lname}`);
console.log(`hello`);
console.log(fname[0]);
 let gat = new String('jfjbfff jffdjfsdf sdfjssg');
 console.log(gat.toUpperCase());  //converts string to uppercase
 console.log(gat.toLowerCase());  //converts string to lowercase
 console.log(gat.charAt(3));     //returns character at index 3
 console.log(gat.indexOf('b'));  //returns index of first occurrence of 'b'
   console.log(gat.slice(-9,4));  //slices string from index -9 to 4
console.log(gat.includes('a'));  //checks if 'a' is present in the string
console.log(gat.split('-','2'));  //splits string at '-' into maximum 2 parts
console.log(gat.charCodeAt(1));     //returns Unicode of character at index 1

                //endswith
const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false

               //Startswith()
const str3 = "Saturday night plans";

console.log(str3.startsWith("Sat"));
// Expected output: true

console.log(str3.startsWith("urd", 3));
// Expected output: true

console.log(str3.startsWith("sat", 3));
//Expected output: false

console.log(str3.lastIndexOf("plans"));

              //split Function

let message = "H-e-l-l-o w-o-r-l-d";
const char=message.split("");
console.log(char);
//The split() method divides a string into an ordered list of substrings, 
// puts these substrings into an array, and returns the array.
//  It accepts a separator as an argument, which determines where the string should be split. 
// If no separator is provided, the entire string will be returned as a single element in an array.

                            //NUmbers

const score = 400;
console.log(score);

const balance = new Number(100.89); 
console.log(balance);
 console.log(balance.toString());
 console.log(balance.toFixed(2))
 console.log(balance.toPrecision(3));
 const bal = 1000000;
 console.log(typeof bal);
 console.log(bal.toLocaleString('en-EN'));
  
                            //MAths
 
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

