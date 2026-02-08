// functions

function sum(a,b)
{
    return a+b
}

let result = sum(1,2)
console.log(result);

function isloggedin(username = "Sam")
{
    if(username ===undefined)
    {
        console.log("please Enter the Username");
        return
    }

    return console.log(`${username} is LoggedIn`)
}
 isloggedin("NIrmal")

 //__________________________________________________________________-
            // Functions With Array And Objects

                     // Paaasing object in Function

function object(anyobject)
{
    console.log(`Username is ${details.username} price is ${details.price}`); 
}

object(
    details = {
    username:"David",
    price: 5000
});

                     // Paaasing Arrays in Function
        
// let myArray = [100,200,300,400]

// function ReturnArray(getarray)
// {
//     return getarray[1]
// }

// let array = ReturnArray(myArray);
// console.log(array);


function ReturnArray(getarray)
{
    return getarray[1]
}

let array = ReturnArray(myArray = [100,200,300,400]);
console.log(array);
