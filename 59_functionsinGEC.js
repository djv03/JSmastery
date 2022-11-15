//this is tutorial is about behaviour of functions in global execution context
//but first you have to know what is global execution context

//first read about it and then come here

//####### 1. normal declaration #######


// var x=3;
// function myname(){
//     console.log("my name is dhruvin");
// }
// console.log(x);
// myname();
// console.log(myname);

//above code is as good as we have seen till now

// but let us now write it another way and see what happens to o/p

console.log(x);//--->prints undefined
myname();//------->works same
console.log(myname);//------->works same also

var x=3;
function myname(){
    console.log("my name is dhruvin");
}


console.log("")

//so function with normal declaration it is behaving as same as it is written in non hoisted way

//######### 2. functions with short syntext #########
console.log(mycity);//----->NOTE: this time it prints unefined same as it was happened with var in above case 

let y=2
var mycity=function(){
    console.log("surat")
}
mycity();
console.log(y);

console.log("");
//so functions beahves as same as var if it is declares with the short syntext


//########## 3.arrow function ########
console.log(mycountry);

var mycountry=()=>{
    console.log("India");
}
mycountry();


// so here also arrow function will behave as same as functions is behaving in case2