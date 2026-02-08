                                  // functions Scope

// there are two types of Scopes

// Local Scope , Global Scope

                                  // Local Scope 

function Lscope()
{
    let num1 = 10;  // Local Scope - The variable Declare under the function This scope is known as LocalScope
    console.log(`The value of Num1 is ${num1}`);
}
Lscope()
                                  // Global Scope

let num2 = 12;  // Global scope - the funtion is declared outside globally for the Function is known as Global function

Gscope()
 // In these case before declaration of the function we cannot Initialize the function 
function Gscope() {       
    console.log(`The Value of num 2 is ${num2}`);
}

function Gscope1() {
    console.log(`The Value of num 2 is ${num2}`);
}
Gscope1()

let variable = function addone(num)   // In these case before declaration of the function we cannot Initialize the function 
{
    return num+1;
}
console.log(variable(5));        

