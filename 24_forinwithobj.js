// how to iterate object 

//the simplest method is to use "for in" loop
//let us see how

const person={
    name:"Dhruvin",
    age:19,
    hobbies:["reading","sleeping","sports"],
}

for (const values in person) {

    //---> Methods to print/iterate object 

      //1. using bracket noatation
            //    console.log(person[values]);

            //above line will automatically iterate all the (values) in object not the key
            //if we want key value pair then we will do it as follow


      //2. using template literals
            //    console.log( `${values}: ${person[values]}`  );
            // console.log(typeof `${values}: ${person[values]}`)
            // console.log(Array.isArray(`${values}: ${person[values]}`));

            // `` gives you freedom to write symboles which are not valid not inside console.log()
            // $ work as notation given prior to varible which is going to change while iterating through array/object

            //NOTE: one imp feature of [] notatio is that it will automatically detect the task assign to it like detecting [values] here in line 23

      //3. using normal printing        
               console.log(values ,":", person[values]);
            console.log(`type of varibale ${values} on object is:  ${typeof (values, ":", person[values])}`)//---------> each time line will print type according to nature of value 
            console.log(Array.isArray( values ,":", person[values] ));//--------> prints "false" beacuse they are having type as object

               console.log("")
               
               // by following basic laws of console.log();

        //IMP NOTE: all above methods prints object as object directly
        //          you can observe type of each varibale is displays as diff type by line 35

}

//usage of Object.keys
    // to acess object in form of array
console.log("")
let type = Object.keys(person);

console.log(type);
console.log("type of person becomes " + typeof type);//---------->prints "object"
console.log(Array.isArray(type));//----------> printts "true" because object.keys has converted object into array
