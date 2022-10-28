//################################################################this is tutorial about strings###########################################################
     //some fun things we can do  with strings with things which already exist in javascipts
     // this already written things is called 'Methods'
     // So, some interesting 'string methods'


//we are going to learn
   //0. length
   //1.trim()
   //2.toUppercae()/toLowercase()
   //4.slice()



//let us take a variable to demonstarate it
let MyCity="Surat";

// here memoery is alloted in continous manner with each memory block of size 1 bit(see memory size for reference)

//S u r a t ----> string
//0 1 2 3 4-----> corrosponding indexing
//ab yeh mat puchana ki computers me indexing 0 kyu start hoti hai 1 se kyu nahi
//me bhi ise dhundh raha hu 

console.log(MyCity[0]);//this will print S
console.log(MyCity.length)//this will print total length of string

//*************************************************************************************************************************************
    
     let MyCountry ='    America    ';
     console.log(MyCountry);
     //this string has lot of space and space is taken as element is Javascript
     //threrefore
     // console.log(MyCountry.length); will print 15

     //we can remove it by our first method: trim()
     // MyCountry.trim();
     console.log(MyCountry.length); //-------->this will print 15
     //popat ho gaya na....MyCountry.trim(); ke use k baad bhi .length method ka output same hi rahega
     //this is beacuse methods return a value which we MUST have to store in the another value
     //tension not!!!!!! we will learn this returning and related stuff very soon in 'function' chapter

     //therefor we would code it like
          MyCountry = MyCountry.trim();
          console.log(MyCountry.length);//-------------->this will print 7

     //we can execute above code with other way by
         let newcountry = MyCountry.trim();
           console.log(newcountry.length);//---------> this also will print 7
           console.log(" ")

//******************************************************************************************************************************** */ 
//let us learn the new method=> slice()
     // syntext------>  slice(start index of element [included], end index [excluded])
     //slice(default: 0 index, defualt: end index) 
     console.log("outputs of slice method");
     let Sport = "football";
     console.log("orirginal string: " +Sport);

        Sport= Sport.slice(0,4);   
        console.log("sliced string: "+Sport);   
        
     //Note: all above methods can also be executed with declaring new variable and stroing in it 
            

