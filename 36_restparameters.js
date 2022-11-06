//this is about rest parameters

//in previous episode we have seen about default parameters
//but what if we have to store values if user has passed more values then declared

//then we will do:

// function printnum(a,b,c){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
// }
// printnum(1,2,3,4,5);//----->this is not able to print 4,5 as we have only 3 parameters defined to it


//here we do not know  how many parameters user would put, so we need to declare function again 
// but with the twist 

// function printnuminfinite(a,b,c,...rest){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
//     console.log("value of other parameter is: "+rest);
// }
// printnuminfinite(1,2,3,4,5,6);
//now we can define as many parameters as we want

//let us do one exercise regarding this: make function which sum the number entered by user

let sumbyuser=(...parameter)=>{
    console.log("enter your numbers");

    console.log(parameter);
    //grtting sum of the all passed values
    var sum=0;
    for (let index = 0; index < parameter.length; index++) {
       
        sum = sum + parameter[index];
      
    }
    return sum;
    
    
}

// sumbyuser(45,88,5,9,31);
let ans= sumbyuser(1,2,3,4);
console.log("sum is: "+ans);