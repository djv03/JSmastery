//################ Introduction to arrays  ###################

//Array is collection of data items in single variable
// till now we declares variable (using let or var) which has only 1 data item in it 
//    but array can store multiple data points at the same time

let fruits=["banana","apple","mango"];

//-->acessing elements of array: by index of each elements

console.log(fruits[2]);

//we can also declares array which has different data types

let mixed=[1,3.5,"hello",null];
//if you check type of JS array it has interesting o/p
console.log(typeof mixed);//------> prints object
//but object us different data type

//So.we have inbuilt js method to check whether given variable is actually or not
//Array.isArray([variable name]);
console.log(Array.isArray(mixed));//------> prints true


//!!!!!!!!!! different behaviour of array then variables
console.log("");
let num1=3;
let num2=num1;

num1=5;
console.log("after changing value of num1");
console.log("the value of num1 is "+num1);
console.log("the value of num1 is "+num2);
//here changing the value of num1 is not affecting the value of num2
//because num1 and num2 both has alloted diff memory location in RAM
// thats why these are called "primitive data type"

let arr1=[1,2,3,4];
let arr2= arr1;

arr1.push(5);

console.log("after pushing element is array 1");
console.log(arr1);
console.log(arr2);
//BUT here changing the value of arr1 is affecting the value of arr2
//this is because both arrays has alloted memory at diff place but has same pointer which initialize the first element of array
//thats why these data type is "called refrence data type"