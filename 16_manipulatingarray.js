// this tutorial is about manipulation of array 

//we will se 4 ways to manipulate elements if arrays

//1. push:add element at end
  
let fruits=["banana","apple","mango"];
fruits.push("kiwi");
console.log(fruits);

//2.pop:remove elemnt from end

fruits.pop();
 //we can store the removed elements also
 //beacuse pop() function returns the value(more at returnihg of the funtion at later part of the video)
   let removed=fruits.pop();
   console.log("removed fruit is "+removed);

//now print array again
console.log(fruits);
  

//3.shift:remove element from first
fruits.shift();
console.log(fruits);
//4.unshift: add element to first
fruits.unshift("orange");
console.log(fruits);