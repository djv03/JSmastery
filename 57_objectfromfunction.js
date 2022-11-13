//function (that create object)
// 2.add key value pair
//3. returns the object

//let us see how

function createUser(Firstname, latName,age,adress,about){

    const user={};
    user.Firstname=Firstname;
    user.latName=latName;
    user.age=age;
    user.about=function(){
        return `${this.Firstname} is ${this.age} years old`;
    };
    user.is18=()=>{
        if (this.age>=18) {
            return this.age >=18;      
        }   
    }

    return user;
}

const user1= createUser("dhruvin","vekariya",19);
console.log(user1);

const is18=user1.is18();
console.log(is18);

const about= user1.about();
console.log(about);