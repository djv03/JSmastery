//callback function

function myfunc2(){
    console.log("inside my func 2");
    console.log("");
}

function myfunc(callback){
    console.log("hello,inside myfunc");
    callback("this line is from callback function");
}

myfunc(myfunc2);

//more about it at later