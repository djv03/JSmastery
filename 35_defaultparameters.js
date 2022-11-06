// this is about defualt parameters in functions

function sumoftwo(a,b){
    if ( typeof b==="undefined" ) {
      
        b=0;
    }
    return a+b;
}

// const sum=sumoftwo(4,5);
const sum=sumoftwo(4);
console.log(sum);

//above line is the simple function to add 2 numbers
//but what if pass only one argument like in line:8, it will gove o/p Nan(not a number)
// we can solve them by predefining values if values is not passed by user

// BUT es6 has given us special way to to do it

function sumoftwo(a=0,b=0)//---> here you can see defined default values while passing, isn't it great!!!
{
   
    return a+b;
}

const sum2= sumoftwo(4,5);
// const sum2=sumoftwo(4);
console.log("sum of defualt parameters: "+sum2);