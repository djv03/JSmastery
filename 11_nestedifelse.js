//this tutorial is about nested if-else
// It is use to check multiple condtion at same with respect to one variabel


let cutoff = 80
let usermarks= prompt("enter your marks");
//promt is use to take input from user

if (usermarks>=80) {
    console.log("congrats!!! You have cleared the exam");
    
}
else if(usermarks<80 && usermarks>70){
    console.log("oh ooh!!! too close, keep trying");
} 
else {
    console.log("sorry! better luck next time");
    
}





// if (condtion 1) {
//     console.log("");
// }


// else if(condition2 other than condtion 1 ){                   
// }
//else if(condition3 other than condtion 1 ){
//        console.log("");
//    } 


// else {
//     console.log("");
    
// }

// IMP NOTE---->
//we can use n number of else if 
 // therefor is is called "else if ladder"
 // but there can be only "one" if and "else" in a function 

