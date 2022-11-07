//this is about for each method

//before we discuss various array methods I have to say somthing to you
//these all array methods can equally implemented using logical way
//but these are provided with the purpose of simplifying writing the code

const array =[1,2,3,4];

function multiply(num){
    let ans=num*2;
    console.log(`${num}*2 = ${ans}`)

}
// for (let index = 0; index < array.length; index++) {
//     multiply(array[index]);   
// }
console.log(""); 
console.log("after using forEach method");
array.forEach(multiply);//---->this code will serve same as for loop written above
//syntext:  [your array name].forEach(function name);

//note:function name should not have brackets as usual

//here we can also write whole body of function inside forEach()

console.log("after passing whole function into the forEach")
array.forEach(function(num){
    // let ans=num*2;
    console.log(`${num}*2 = ${num*2}`)

})