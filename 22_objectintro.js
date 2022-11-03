// this is our introductory tutorial to term called "object";

//object is collection of data points
//lekin ek second, array bhi to yahi karta tha to phir "object ka kya kam pada?
//IN ENGLISH: wait a minute, Array used to do the same thing, then what is the use of object?
// we will discuss this in the later part of the video

//declaration of object
const person={
    name:"Dhruvin",//-----> syntext=>  key : "value"
    //this is called key value pair
    age:19,
    hobbies:["reading","sleeping","sports"],
}

//printing whole data of [person]
console.log(person);
//printing individual property of [object]
console.log(person.age);

//array inside the object
console.log(person.hobbies);
console.log(person.hobbies[1]);

//updating elements of [object]
person.age=20;
console.log("updated age of person is "+person.age);

//adding elemnts to [object]
person.gender="male";
console.log(person);

