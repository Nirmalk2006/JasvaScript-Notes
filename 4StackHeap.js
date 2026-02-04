                                        //stack & Heap Memory

//the Primitive datatypes Uses stack Memory
//the Primitive datatypes are Integer, Float , boolean, bigint etc.
//the Non-Primitive datatypes uses Heap Memory(get a Reference)
//the Non-Primitive datatypes are Objects, Arrays, Functions, etc.

                             //Stack Memory Example
let a = 10;
let b = a;  //b is assigned the value of a
console.log(a);  //output : 10
console.log(b);  //output : 10

                            //Heap Memory Example


let username = {
   email:"user@google.com",
   upi:"user@ybl"
}

let usertwo=username;               //usertwo is assigned the reference of username object
console.log(usertwo.email);         //output : user@google.com

usertwo.email = "Nirmal@gmail.com";   //modifying email property using usertwo reference
console.log(username.email);           /*output : Nirmal@gmail.com (because both username and usertwo refer to the same object in heap memory)*/
console.log(usertwo.email);           // output : Nirmal@gmail.com 