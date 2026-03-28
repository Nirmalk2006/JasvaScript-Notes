       // for of Loop in js is used to iterate over the elements of an array ,strings,maps,sets etc
       // for of loop uses iterabels 
let arr = [1,2,3,4,5]
for(const num of arr)  //for of loop
{
    if(num == 3)
    continue;  //continue statement is used to skip the current iteration of the loop and move to the next iteration
    console.log(num);
}

    //The for...in loop is used to iterate over keys (property names) of an object.
    //for in loop doesnt uses iterables

let students = {
      name : "Nirmal",
      age : 19,
      city : "Pune"
}
 for(const key in students)  //for in loop
 {
   console.log(key,students[key]);
 }

// foreach loop is used to very simple and clear way to perform iterate actions on every and each elementsof an arry

//by using function
let myarr = ["flash","Batman","Shaktiman"]
myarr.forEach((element) => {
    console.log(element);
});

//by using arrow function
myarr.forEach((element) =>{ 
    console.log(element)
});