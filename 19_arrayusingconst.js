//this tutorial about usage of const for creating array

//NOTE: it is considered to be safe to declare arrays by using const
//we will se how

const city=["delhi","mumbai","surat"];

console.log(city);

//now we try to manipulate our city array

//const city=["kolkata"];---> this will give error because city is declare by using const
//you can see that this error is not shown in our 17_.js file
//this is because, array is declare by using let in that file


//but we can change into array by using array methods,such as
city.push("kolkata");
console.log("after using .push");
console.log(city);

//So the que is is "non-changing" property of CONST has changed?
//answer is NO
//here is the explaination
// a array in memory is only identified by its first index's adress(let us say B2344),all remaining element is stored in heap memory
//thats why compiler not show any error while chaning in array even after using CONST
//because all elemnts are pushed into the heap memory not into the main memory


// IMP NOTE:using const over let is prefrable because it will let to less messing up in using name of variable