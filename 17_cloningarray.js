//we have seen change in arr1 is led to change in arr2
//but what about if do not need this behaviour 
//that is called "cloning of array"
//we can do this by 3 method

let arr1=["item1","item2"];
//let arr2=["item1","item2"];//this is most pappu way to clone a array,by just writing down all elements

//   1. using slice method

//let arr2= arr1.slice(0);
//above line will slice arr1 into 0 to last index(means whole array);
//and arr1 is copied into array2 

//     2. using concatination

// let arr2 = [].concat(array1);
//we will discuss concat method later


//      3. spread opertaor
let arr2 = [...arr1];
//spread operator is use to update and concate at the same time
// more in detail about it at later part of the video 


 
arr1.push("item 3")
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);