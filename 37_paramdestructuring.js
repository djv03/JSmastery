let person1={
    name:"narendra modi",
    gender :"male",
    age:"70"
}
console.log(person1);
let person2={
    name:"lalit modi",
    gender :"male",
    age:"70"
}


let persondetails=({name,gender,age})=>{//----->this line is will behave as declaring varible for storing values         of objects(as same as we have done in array destructuring)
    console.log(name);
    console.log(gender);
    console.log(age);
    // console.log(age);

}
persondetails(person2);//----->pass here object name as it will be stored in the declared varibales