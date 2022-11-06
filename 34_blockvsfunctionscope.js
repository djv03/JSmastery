//block vs function scope

//var is function scope
//let and const are block scope

//now scope is as same as "teritory" as have discussed in previous file


//every { } is a block in js

{
    let name="dhruvin";
    console.log(name);
}
// console.log(name);--------> this line will print error because name is defined in the block
//and we try to acess it outside {},same thing would happen with const

//this error would not come with usage of var



//?????????  now you might ask why not line:28 start searching name varibale in its lexicle scope

//good question!
//let us understand it with an interestin example
let myname="sahil";
function Myname(){
    if(true){
        let name="dhruvin";
        // console.log("calling from inside if "block""+myname);
    }
    console.log("calling outside of if block: "+myname);//----->this line will throw error coz name is not present in its scope
}
Myname();


//but observe carefully, name has lexicle scope of inside Myname();
//       if found then print 
// else find in lexicle scope of the Myname(), which is whole file

//here line:28 will print "sahil" coz it has found in lexicle scope of Myname();
//try after commenting it and it will give u error