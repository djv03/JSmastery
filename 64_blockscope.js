// now let us understand what block scope is

// first of all discusss what "block" mean in the js

//block is nothing just bundle of js line of code enclosed by {}

{

}

//above code is 100% valid js

//now lets understand what block scope is 

{
    var a=10;
    let b=20;
    const c=30;
}
console.log(a);//---> this will print 10
// console.log(b);//---->refernce error: c is not defined
// console.log(c);//---->refernce error: b is not defined

// so here we can clearly see that a(var) is acessible outside block
//but neither b(let) and c(const) is aceesible

// so we can say that let and const is "block scope"
// and var is of "global scope"

// IMP: var is present in the window object after parsing
        // but let and const would present in seperate block memory

 /////////////   shadowing in js    ////////
 console.log("");
const z=100;
let y=50;
var x=60;
 {
    var x=10;
    let y=20;
    const z=30;
    console.log(x);
    console.log(y);
    console.log(z);
 }
 console.log("")
 console.log(x);
 console.log(y);
 console.log(z);

// so here we can conslude that
 //var is shadowed while let and const are not