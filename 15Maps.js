                //Maps is used to change Every elements from an array.

let arr = [1,2,3,4,5];
let myarray = arr.map(function(num){num = num * 2; return num;}); 
console.log(myarray);  //output: [2,4,6,8,10]

//chaning of map function and filterfunction and also reduce function

let arr1 = [1,2,3,4,5];
let myarray1 =arr1.map((num)=> num * 2)
                  .map((num)=> num + 2)
                  .filter((num)=> num >= 10)
                  .reduce((acc,num)=>acc + num,0);         // chaining of map function and filterfunction and also reduce function
console.log(myarray1); 


           // reduce function that reduces an array into one value by combining its elements

let ShoppingCart = [
    {
        item : "book",
        price : 100
    },
    {
        item : "pen",
        price : 50
    },
    {
        item : "pencil",
        price : 20
    },
    {
        item : "eraser",
        price : 10
    },
    {
        item : "sharpener",
        price : 30
    },
];

let total = ShoppingCart.reduce((acc,prod) => acc + prod.price,0);  // reduce function that reduces an array into one value by combining its elements
console.log(`Price: ${total}`);
 

let arr2 = [1,[2,3],[4,5],6,7];
let flatarr = arr2.reduce((acc,cur) => acc.concat(cur),[]);  // to flatten an array using reduce function
console.log(flatarr);  //output: [1,2,3,4,5,6,7]