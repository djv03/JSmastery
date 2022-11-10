//method 
//function inside object
//like
 
const person={
    name:"dhruvin",
    age:19,
    myfunc : function(){
        console.log("this is inside my func");
        console.log(this);//---->here "this" key word is very very cruicial
    }
}
// person.myfunc();

//significance of this
// this use to acess key(as a varible) of object(whole body including function) from which function is called
// let us understand it with one more example

 
const person1={
    Name:"dhruvin",
    age:19,
    about: info
}
const person2={
    Name:"sahil",
    age:19,
    about: info
}
const person3={
    Name:"vipul",
    age:19,
    about: info
}

// function info(){                                                  -------> this defination will throw the error coz here function couldnt find "Name" and "age" in its local scope
//     console.log(`my name is ${Name} and I am ${age} years old`)   
//  }

//------>  here this function is comes into play
// "this" tell function to acess these elements from body of object(in which is is defined or called)

function info(){
    console.log(`my name is ${this.Name} and I am ${this.age} years old`)
 }
person3.about();
person2.about();
person1.about();



// ***********we will come here again shortley**************