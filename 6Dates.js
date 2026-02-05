let mydate = new Date();
console.log(mydate);
console.log(mydate.toLocaleString()); // it will print date and time based on our location
console.log(mydate.toLocaleDateString());// it will print only date based on our location
console.log(mydate.toLocaleTimeString());// it will print only time based on our location
console.log(typeof mydate); //object

let mycreatedate = new Date(2023,1,22,5,13,56); // create date BY using year,month,day,hour,minute,second
console.log(mycreatedate.toDateString());
console.log(mycreatedate.toLocaleString());
let my = new Date("2025-02-13") // create date BY using YY/MM/DD or DD/MM/YY or BY using our decision 
console.log(my.toLocaleString());

// for customization of The  dates() method
  
my.toLocaleString('default',{
    weekday:"long",
}) 