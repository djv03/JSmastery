//this is about filter() method

const nums=[1,2,3,4,5,6,7];

// const isEven=(num)=>{
//     return num%2==0;

// }
const isOdd=(num)=>{
    return num%2!==0;

}

const evennums= nums.filter( 
     isEven=(num)=>{
    return num%2==0;
});

// syntext of filter:
    //    const [variable name]= [array name].filter(callback function3a )

console.log(evennums);
const oddnums= nums.filter(isOdd);
console.log(oddnums);