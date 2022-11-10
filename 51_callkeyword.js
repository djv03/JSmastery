//use of "call" keyword


//first create two object as same as previous file to start discussion

const dish1={
    dishname:"speghetti",
    price: 300,
    about: function(genre,makingtime){
        console.log("this is in the dish1 obj body");
        console.log(`the ${this.dishname} has price of ${this.price} rupees, ${genre},${makingtime}`);
    }
}

const dish2={
    dishname:"hakka noodles",
    price: 200
}

//now call the about method to print our desired line

dish1.about();//------>this will print as per previous exaple
       // dish2.about();//------>but this will give error of "dish2.about is not a function"

//this is coz about() is not defined in the dish2

//BUT WE HAVE SOLUTION TO THIS AND THIS IS OUR "call" keyword

dish1.about.call(dish2);//----->this will print our desired results
//call is use to give acess to function of the methods which is not defined in the that objects


//!!!!!!! full use of the call()

// call([method you want to give acess], ...[other arguments])
//for example

dish1.about.call(dish2, "chinese" ,"will be ready in 20 min");
//this is extended syntext of the call()


// !!!!!!!!!! now we have alternate way to define it aslo like

 function about(genre,makingtime){
    console.log("declared outside of the object")
    console.log(`the ${this.dishname} has price of ${this.price} rupees, ${genre},${makingtime}`)
}

const dish3={
    dishname:"bhel",
    price: 40
}
dish1.about.call(dish3,"indian", "will be ready in 5 min");//-------->this is aceesing about() from first declaration
about.call(dish3,"indian", "will be ready in 5 min");//------->but this is acessing about() from second declartion I dont know why???


