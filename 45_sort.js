//this is about sorting in js

let arr1=[1,2,4,500,60,3000];

arr1.sort();//this is statement to sort the array
console.log(arr1);

//Bam!!! you would get some weird looking array which is nowhere close to be called 'sorted';
// "WELCOME TO JAVASCRIPT"
//this is because strange nature of javascript 
//JS sort on bases of the ASCII values
//ASCII values denoted digit by digit of the number
//so all numbers sorted on the basis of first digit

//(you can try that with names also,they will print as per dictionary laws)

//so the question is how the hell we are gonna get the sorted arrays in JS
//lets see this

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
console.log(a +" & "+ b);
return a-b});
console.log(points);

//now i have cleare about usage of sort but not on how memory is used in the 
//abhi to muje kuch samaj ni aya but i will come back later