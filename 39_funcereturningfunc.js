//function returning function

function myfunc(){

    function hello(){
        console.log("hello everyone(from hello function)");
    }
    return hello;
}

const ans = myfunc();//---->here my func is returning hello() function which is storen in the ans
// ans();
console.log(ans());//this is returnig hello(), SO whole body of hello is printed