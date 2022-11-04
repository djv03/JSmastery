//this is our new way to declare the function
//which can keep us away from declaring varible inside a funcition

// function sum(){
//     let num1=3;
//     let num2=5;
//     let sumnum= num1+num2;
//     console.log("sum is "+sumnum);
// }

//above code is cool but we have declare variable for storing values
//we can skip that part by doing this

function sum(num1,num2){                //here num1 and num2 has declared ahead of starting function
    let sumnum=num1+num2;               //it is called "argument" in technical terms
    console.log("the sum is "+sumnum);
}

sum(5,6);                 //and this part is called calling of the function



//above function is alpha but we have to write console for writing output
//we can skip that part also if we do following

function power(base,pow){                //this part is called delcaring part of the function
   return base**pow;
}
// power(2,3);-----> this will print nothing coz here function is "returning" some value 
// to whom
//to line in the call where it is called
//means now line:29 has value 8 there not power(2,3);
//so we have store it in varible to console it
const exponent=power(2,3);
console.log( "2 to power 3 is: "+ exponent);

//now this is called the SIGMA function coz it neither need variable declaration nor any shitty console

//on this basis we can declare 4 type of function
//1 take nothing return nothing  ex:happybirthday()
//2 take somthing return nothing  ex: sum()
//3 take nothing return something
//4 take something return something ex: power()