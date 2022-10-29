//this is about a JS [identifier] which is called string
// note: [identifier] means muje nahi pata ki isko exact kya kehte hai,we will figure it out

//first we see datatyopes in js
// string "India";
// integer age;
//boolean 

let age= 23;             // a integer
let age2= "23";          // a string
let Name= "Dhruvin";     // a string

console.log("below line print typedeof use")
console.log("type of age is: "+typeof age);    //
console.log("type of age2 is: "+typeof age2);   //
console.log("type of Name is: "+typeof(Name));   //
console.log("");
console.log("");

//##########let us convert string into number and vice-versa##############
console.log("below line will print modifies types")
 let agestring = age + "";       //this is how we can convert number into string
 let agestring2= String(age);
 console.log("type of agestring is: "+typeof agestring);  //now this will print string
 console.log("type of agestring2 is: "+ typeof agestring2);  //now this will print string


let namenumber = + Name; 
let namenumber2= Number(Name);      //this is how we can convert string into number
console.log("type of namenumber2 is: "+typeof namenumber); ////now this will print number
console.log("type of namenumber2 is: "+ typeof namenumber2);