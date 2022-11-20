// let us understand what "first class function" is ft. Namste Javascript

// terminologies you might heaed with function:

//function statements

function a(){
    console.log("we are inside function a");
}
a();

//function expression

var b= function qwe(){
    console.log("hello")
    console.log(qwe);
    
}
b();


      //here you can see that function is act as value or normal variable 

//function declaration
   //function declaration = function statements
   //nothing more

 
//anonymous function
//    function without name is called anonymous function
  
   //but it give you synrext error while using it
   // so you might ask then why the hell they exist
//answer is something which you already know
// we can use them in the function expression like in line:13


//named function expression

//difference b/w paramaeters and arguments
  let c = function(param){
    console.log("this function is to print: "+param);
  }
  c(3);
// parameters: what we pass while declaring function
//            thats why param is function scope while args is not
// arguments: what we pass while calling function 


//first class function
      //functions which pass as parameters through another function or can return from another function 

      var d= function(param2){
        return function xyz(){
            console.log("hello: "+param2);
        }
      }
      console.log(d(4));
      let ans=d();
      console.log(ans());
      
//"function are first class citizen" is same as above illustration 

//arrow function