//fill method

//fill method is simply use to fill the array (if empty)

const arr1= new Array(10).fill(0);
//this is our new way to declare array while using array methods
// const [variable name]= new Array(length of array).[any method]

//now talk about fill
//syntext of fill:
//       fill(value: [anyvalue], index where you want to start fill, index+1 where you want to finish the fill): any[]
//note: here value is compulsory to pass 
//but starting index and last index is optional to pass,
// they will have default value as 0 and array.lenght-1 respectively
console.log(arr1);