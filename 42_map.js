//map method
//it do picking from array and put it into another array with/without performing operation on it

const nums=[1,2,3,4,5];

const squaring=(num)=>{
    // return num*num;
    let ans=num*num;
    console.log(ans);
}

// console.log(squaring(nums[2]));

// nums.map(squaring);//-------> it wont work now coz map STORES the value into another array
//therefore we need to store its o/p into another variable to console it

let squarednumbers=nums.map(squaring);
console.log("array created by map(): "+squarednumbers);

//NOTE: if we do not create function which returns somthing 
//      and then pass it into the map function then it will give empty array

//coz map() will only work with functions which returns somthing
