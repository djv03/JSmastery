
// console.log(a);//---->gives: Refernce error
// console.log(b);//------> gives undefined{this is called hoisting}
let a=10;
var b=20;

//now let us understang why this error is coming and what is meaning of the Refernce error

// Hoisting: aceesing varibales even before its delaration

// how hoisting if let(const) is diff from var

// in case of var varible is already present in the GEC with value intialised "undefined"

// but for let: it is not present in the GEC and it is waiting untill it gets value and then come into the GEC

//TDZ: temporal dead zone
//the time period between let varible getting its value and present undeclared in gec 

//###### why Refernce error #########
//if we ever try to aceess element which is in the TDZ, then it will give: Refernce error


//now we can acess above varibles by window object or this (coz both r same)
console.log(Window.a);
console.log(Window.b);