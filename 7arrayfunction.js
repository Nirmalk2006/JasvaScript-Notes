//                       //Arrays
let myar = new Array(1,2,3,4,5);
console.log(myar);
//                       //Array Methods
myar.push(6)
console.log(myar); //adds 6 at the end of array
console.log(myar.unshift(45)); //adds 45 at the beginning of array
console.log(myar.shift());//removes first element from array
console.log(myar.pop());//removes last element from array
console.log(myar);
console.log(myar.includes(4));// checks whether 4 is present in array or not
console.log(myar.indexOf(4));   // returns index of 4
console.log(myar.join()); // converts array to string
console.log(typeof myar);

                      //splice
// Use splice() when you need to directly modify the array by adding, removing, or replacing elements without changing original Array.
let myarr = ['dog' ,'cat' , 'monket', 'jnvvf'];
myarr.splice(1,0,'Ele','dsd');
console.log(myarr);

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 3, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);
  
                       //slice
// Use slice() when you need a copy of a section of an array without changing the original Array.
let arr=['dog','cat','Monkey','cow','buffalo'];
let new_arr = arr.slice(1,4); // output : [ 'cat', 'Monkey', 'cow' ] but 4 is not changed 
console.log(new_arr);

//concat() method Merges two or more array in One array
let heroes = ['shaktiman', 'Iroman', 'Spiderman', 'flaah'];
let new_heroes = ['batman', 'superman'];
let willen = ['daku magalsingh'];
let all_heroes = heroes.concat(new_heroes,willen,heroes);
console.log(all_heroes);

// flat() methodin array uses when the array is recurssively merges another arrays then the flat method is used
let arr1 =[1,2,[3,4],5,6,[7,8,[9,10,11]]];
let merge_arr = arr1.flat(Infinity);
console.log(merge_arr);


let num1=23;
let num2=45;
console.log(Array.isArray("nirmal"));// o/p false these method find the array is array or not.
console.log(Array.from("nirmal")); // converts string to array like this ['n','i','r','m','a','l']
console.log(Array.of(num1,num2));// creates array from the given numbers
console.log(Array.from(num1));// converts number to array of digits