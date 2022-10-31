//this tutorial is about for loop
//you can ask why we need another loop while we have while loop already
//ye to muje bhi nahi pata

//SO, now we discuss syntax and usage of for loop

let i;

for (let i = 0; i < 5; i++) {
    console.log("value of i is now "+i);
}
console.log("")



//the syntext

//for ([intial condition of i]; [terminating condition of i]; [changing i]) {
//    code here
    
//}
// IMP NOTE:
//condtion 1 and 2 are not necessary to write inside the syntext but third is must
//therefore we can assign values outside the loop like in line 26

                // let i;
                // let i = 0
                // for (; i < 5; i++) {
                //     console.log("value of i is now "+i);
                // }


// ############# break and continue keyword in loop  ###############

//use of break: use to terminate looping even terminating condition is not arrived in the loop
console.log("o/p of break is printed here")
let j;

for (let j = 0; j < 10; j++) {
    if (j===6) {
        console.log("break is in action, So no further code will execute")
        break;
        
    }
    console.log("value of i is now "+j);
}
