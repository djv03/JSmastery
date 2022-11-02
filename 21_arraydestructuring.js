// array destructuring
//here destruring means breaking of element of array

const arr=[1,2];


let [var1,var2,var3]= arr;
// now all var1,var3,var2 will behave same as normal variable
// if we declare it with const then it will then behave as const variable


console.log("value of var1 is: ", var1);
console.log("value of var2 is: ", var2);
console.log("value of var3 is: ", var3);//--->this will print undefined because elemnt 3 is not present in arr



