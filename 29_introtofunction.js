//this is our introductory lesson on "function"
// fuctions are most important thing to learn in JS
// so, BE ATTENTIVE!!!

//Defination:function is peice of code which is written to a task
// yeah...thats it, function is nothing but chunk of code from whole code


//let us make a simple app which reminds you your birthay

//first we define the function

function happybirthday(){
    console.log("Happy birthday to you!!!")
}

// now we have our function, which has task to print Happy birthday

let mybirtdate= 2;
let mybirtmonth=10;

let date=prompt("enter date");
let month=prompt("enter the month")
if (date==mybirtdate && month==mybirtmonth) {
    happybirthday();//here function is used and code inside will run it
    //this is called "function calling" or "function invoking "in technical terms
    //now we can use happybirthday(); as want  as many time
    
} else {
    console.log("good morning");
    
}

//task: 1. make a programme to remind "to do haircut" on last day of month using function
//        2. make a programme to find cube of a number using function
//POINTS TO REMEMBER: 1.function will increase code readability as well as reusability
//                     2.no two function can have same name,but can have same code inside it(menas give same output)
//                      3. varibles declared inside functions can not be acessed outside the function