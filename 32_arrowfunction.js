//######## arrow function ##############


//this is the most used type of declaring function 
//it is used in frameworks like react and idustry level codes
// So now see how we can use it

//--->funtion 1
const power = (base,pow) => {   //you can see only function keyword is removed and => is appeared in the line 
    return base**pow;
 }

//---->function 2
 const isEven=(num)=> {
    if (num%2===0) {
        return "even";
    }
    return "odd";
 }
 const ans= isEven(23);
 console.log(ans);

 //some special allowance to us when only one argument is there
 //       no need to put () around it
 
 //some special allowance to us when only one line code is there in the function
 //       no need to put {} around it