//usage of spread operator with object 

//spread operator is used to spread the elements of the string array in linear fashion
//it can also be use to concate strings/object

const num1=[1,2,3];
const num2=[..."456"];//---->this will behave as '4','5','6'
const name= ["dhruvin"];//----->this will not be spread because it is considered as individual element of array
//instead const name= "dhruvin"; will be spread in individual characters
const combine =[...num1,...num2,...name];
console.log("printing combined array");
console.log(combine);
console.log("");


//now we will do the same with objects

const obj1={
    key1:"value1",
    key2:"value2",
};
const obj2={
    key3:"value3",
    key4:"value4",
}

const combineobj={...obj1,...obj2,key51:"value51"};//----->we can also add element of object directley like this
console.log("printing combined object")
console.log(combineobj);