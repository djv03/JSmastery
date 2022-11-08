//now talk about splice method
//it can do insertion and deletion simultaneousaly in between the array

const arr1=[ "item1","item2","item3" ];

//deletion
arr1.splice(1,2);
//splice([index where you want to start delete],[ no.of elements you want to delete])
console.log(arr1);

//insertion
arr1.splice(1,0, "iserteditem");
//splice([index where you want to start delete],[ no.of elements you want to delete], element(s) to insert at position mentined in 1st argument )
console.log(arr1); 

//both simutaneosly
const cities=["delhi", "mumbai","kolkata"];
const deletedcities=cities.splice(0,2,"chennai");
console.log(cities);
//it is important to note here that inserted item would go only at where the deletion is happned in splice method


console.log(deletedcities);
