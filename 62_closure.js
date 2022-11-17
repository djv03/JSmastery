// now let us discuss about closures


function x(){
    
    function y(){
        console.log(a);
    }
    return y;
}
var a=12;

var returned= x();//----> stores whole body of y coz x() is returning function y()
console.log(returned);//--->prints it

returned();//now y is invoked here and it prints the value of a by finding valeu of a in its lexicle scope which is GEC;

//now intersting thing here is thhat y is holding its varible even it is popped out of call stack
// and also a is outside the scope of y(
// but Y() still manages to prints it

//this observation led us to these conclusions
// 1. function hold its whole body
// 2. it also maintain varaible which is present in its lexicle scope

//this property of holding [lexicle scope varibales+function] is called closure;



//now discuss closure with one more example
console.log("")
function z(){
    var a=10;
    function y()
    {
        var b=12;
         function x()
        {
            console.log(a,b);
        }
        x();
    }
    y();
}
z();




//uses of beautiful closures
// 1. module design pattern
// 2. currying
// 3. function
// 4. momoize
// 5. maintaing state in async world 
// 6.setTimeout
// 7, iterator
// 9 and many More.......