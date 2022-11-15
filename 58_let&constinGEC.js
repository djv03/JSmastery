//as we have seen behaviour of var and function in the GEC

// now let us see the behaviour of the let an const in the GEC
//    (they both behaves the same)


// console.log(myname)
let myname="dhruvin";

//now line:7 is giving an intersting error which is 
//          "Cannot access 'myname' before initialization"


//if we try to console myname with out even defining it then
console.log(anothervariable);

//then this will give erro of:
//       uncaught refernceError:anothervariable is not defined


