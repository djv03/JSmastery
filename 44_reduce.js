//reduce method

const nums =[1,2,3,4,5];

 const sum = nums.reduce((accumulator,num)=>{
    return accumulator+ num;
 })
 console.log(sum);

 //let us now understand what is happening here

 //here you can see 2 parameters, one is acculator an other is answer
 // accumulator work as intermediatory(or we can say temporary) varibale where a data is stored
 //it have 0 as default
 //now see how reduce works

// accumulator      num             return
//  0               nums[0]=1        0+1=1
    //   *now this returned value is stored into the accumulator
//   1               nums[1]=2        1+2=3
//   3               nums[2]=3        3+3=6
//   6               nums[3]=4        6+4=10
//   10              nums[4]=5         10+5=15
// 15                nums[5]=undefined   15+undefined=undefined

// whenever accumulator gets undefined from return it will print value which currently it has
// here prints 15

//let us understand this one more example

//we need to get total prize of the item which is in the cart of an e-commerce site

const usercart=[
    {productid:1, productname: "tshirt", price: 400},
    {productid:2, productname: "Hoodie", price: 800},
    {productid:3, productname: "Jeans", price: 600},
]

const totalprize= usercart.reduce(
    (totalprize,currentproduct)=>
    {  console.log(totalprize);
       return totalprize + currentproduct.price;
    },0
)
console.log("total prize of the cart is: "+totalprize);

//[array name].reduce(function(total, currentValue, currentIndex, arr), initialValue)
// here currentIndex, arr and intial value is optional
// but it is safe to declare intial value 0 each time
// try above code without initializing